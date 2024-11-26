import ApiService from '../../../shared/api/apiService.ts'
import { Product } from '../../../shared/types/product/Product.types.ts'
import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query'

interface ProductListApiResponse {
  products: Product[];
  page: number;
  total: number;
}

interface InfiniteProductData extends InfiniteData<ProductListApiResponse> {
  preparedProducts: Product[];
}


// Можно вынести этот хук в entities/hooks/useGetProducts (он будет универсальным и переиспользовавться во всех фичах, где нужен список продуктов)
// А этот хук сделать хуком фичи
// также нет прослойки между бэком и фронтом
const useGetProductList = (): UseInfiniteQueryResult<InfiniteProductData, Error> => {
  // useGetProducts();
  // useGetBasket();
  // И тд
  const PRODUCT_LIST_KEY = 'productList';
  const DEFAULT_PRODUCT_LIMIT = 10;

  return useInfiniteQuery<ProductListApiResponse, Error, InfiniteProductData>({
    queryKey: [PRODUCT_LIST_KEY],
    queryFn: async ({ pageParam = 1 }) => {
      // лучше параметры вынести на уровень модуля, и при вызове не знать, какой внутри url. Просто прокидывать типизированные параметры
      // productService.get({ ...params })
      // Если что-то измениться в url этой зущности придеться лезть сюда лишнаяя ответственность
      // return await productsService.search();
      return await ApiService.get<ProductListApiResponse>(`products/search?page=${pageParam}&limit=${DEFAULT_PRODUCT_LIMIT}`);
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalProductsLoaded = allPages.reduce((sum, page) => sum + page.products.length, 0);
      const hasNextPage = totalProductsLoaded < lastPage.total;

      return hasNextPage ? lastPage.page + 1 : undefined;
    },
    select: (data): InfiniteProductData => ({
      ...data,
      preparedProducts: data.pages.flatMap(page => page.products)
    }),
    initialPageParam: 1,
  });
};

export default useGetProductList;
