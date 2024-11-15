import ApiService from '../../../shared/api/apiService.ts'
import { Product } from '../../../shared/types/product/Product.types.ts'
import { useQuery } from '@tanstack/react-query'

const useGetProductList = () => {
  return useQuery({
    queryKey: ['productList'],
    queryFn: async () => ApiService.get<Product[]>('products/search'),
  })
}

export default useGetProductList
