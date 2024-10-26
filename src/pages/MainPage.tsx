import ProductList from '../features/productList/components/ProductList/ProductList.tsx'
import { MOCK_PRODUCTS } from '../features/productList/mocks'

function MainPage() {
  return <ProductList products={MOCK_PRODUCTS} />
}

export default MainPage
