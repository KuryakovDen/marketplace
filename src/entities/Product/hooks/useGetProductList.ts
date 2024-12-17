import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { productApiService } from '../services/productService.ts'
import { ProductListApiResponse } from '../types/productTypes.ts'

const useGetProductList = () => {
  const PRODUCT_LIST_KEY = 'productList';
  const DEFAULT_PRODUCT_LIMIT = 10;

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<ProductListApiResponse, Error, InfiniteData<ProductListApiResponse>, ['productList'], number>({
    queryKey: [PRODUCT_LIST_KEY],
    queryFn: async ({ pageParam = 1 }) => await productApiService.search({
      page: pageParam,
      limit: DEFAULT_PRODUCT_LIMIT,
    }),
    getNextPageParam: (lastPage, allPages) => {
      const totalProductsLoaded = allPages.reduce((sum, page) => sum + page.products.length, 0);
      const hasNextPage = totalProductsLoaded < (lastPage.total || 0);
      return hasNextPage ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const products = data?.pages?.flatMap(page => page.products) || [];

  // const products = data?.pages?.flatMap(page => {
  //   return new Product(page.products)
  // }) || [];

  // Todo можно не класс а функцию использовать

  return {
    products,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetProductList;
