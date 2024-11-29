import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
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
  }: UseInfiniteQueryResult<ProductListApiResponse, Error> = useInfiniteQuery<ProductListApiResponse, Error>({
    queryKey: [PRODUCT_LIST_KEY],
    queryFn: async ({ pageParam = 1 }) => {
      return await productApiService.search({
        page: pageParam,
        limit: DEFAULT_PRODUCT_LIMIT,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalProductsLoaded = allPages.reduce((sum, page) => sum + page.products.length, 0);
      const hasNextPage = totalProductsLoaded < (lastPage.total || 0);
      return hasNextPage ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const products = data?.pages?.flatMap(page => page.products) || [];

  return {
    products,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetProductList;
