import { IProduct } from '../../../shared/types/product/productTypes.ts'

export interface ProductListApiResponse {
  products: IProduct[];
  page?: number;
  total?: number;
}

export interface ProductSearchParams {
  page: number;
  limit: number;
}
