import ProductList from '../features/productList/components/ProductList/ProductList.tsx'
import { MOCK_PRODUCTS } from '../features/productList/mocks'
import ProductVirtualList from '../features/productList/components/ProductVirtualList/ProductVirtualList.tsx'

function MainPage() {
  return <ProductVirtualList products={MOCK_PRODUCTS} />
}

export default MainPage
