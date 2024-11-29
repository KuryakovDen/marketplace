import ApiService from '../../../shared/api/apiService.ts'
import { ProductListApiResponse, ProductSearchParams } from '../types/productTypes.ts'
import getUrlWithQueryParams from '../../../shared/utils/getUrlWithQueryParams.ts'

class ProductApiService extends ApiService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  public async search(params: ProductSearchParams): Promise<ProductListApiResponse> {
    return super.get<ProductListApiResponse>(getUrlWithQueryParams('search', params));
  }
}

export const productApiService = new ProductApiService('/products');
