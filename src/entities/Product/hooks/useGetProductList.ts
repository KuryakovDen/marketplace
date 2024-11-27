import ApiService from '../../../shared/api/apiService.ts';
import { Product } from '../../../shared/types/product/Product.types.ts';
import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';

interface ProductListApiResponse {
  products: Product[];
  page?: number;
  total?: number;
}

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
      // TODO Вынести в отдельный сервис
      return await ApiService.get<ProductListApiResponse>(`products/search?page=${pageParam}&limit=${DEFAULT_PRODUCT_LIMIT}`);
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
    isLoading,
    hasNextPage,
    fetchNextPage,
    products,
    isFetchingNextPage,
  };
};

export default useGetProductList;
