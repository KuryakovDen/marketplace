// product Service знает специфику как что нужно, чтобы получить продукты, какие нужны параметры, какой урл и тд
// Но то, как мы ходим за продуктами знает ApiService
class ProductApiService extends ApiService {
    public search(params: ProductSearchParams): Promise<ProductResponse> {
        return super.get<ProductResponse>({})
    }
    // Тут может быть много различных методов, но так или иначе под капотом они будут использовать методы из ApiService
}

export const productApiService = new ProductApiService('/products');