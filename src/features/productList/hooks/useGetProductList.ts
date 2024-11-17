import ApiService from '../../../shared/api/apiService.ts'
import { Product } from '../../../shared/types/product/Product.types.ts'
import { useInfiniteQuery } from '@tanstack/react-query'

interface ApiResponse {
  products: Product[];
  page: number;
  total: number;
}

const useGetProductList = () => {
  const PRODUCT_LIST_KEY = 'productList';
  const DEFAULT_PRODUCT_LIMIT = 10;

  return useInfiniteQuery<ApiResponse, Error>({
    queryKey: [PRODUCT_LIST_KEY],
    queryFn: async ({ pageParam = 1 }) => {
      return await ApiService.get<ApiResponse>(`products/search?page=${pageParam}&limit=${DEFAULT_PRODUCT_LIMIT}`);
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalProductsLoaded = allPages.reduce((sum, page) => sum + page.products.length, 0);
      const hasNextPage = totalProductsLoaded < lastPage.total;

      return hasNextPage ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
    enabled: true,
  });
};

export default useGetProductList
