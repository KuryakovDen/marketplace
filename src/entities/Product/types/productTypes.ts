import { Product } from '../../../shared/types/product/Product.types.ts'

export interface ProductListApiResponse {
  products: Product[];
  page?: number;
  total?: number;
}

export interface ProductSearchParams {
  page: number;
  limit: number;
}
