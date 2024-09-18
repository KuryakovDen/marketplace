import ProductItem from './ProductItem.tsx'
import { MOCK_PRODUCTS } from '../mocks'
import getProductPrice from '../../../shared/utils/getProductPrice.ts'

function ProductList() {
  return <ul>
    {MOCK_PRODUCTS.map((product) => <li key={product.id}><ProductItem {...product} price={getProductPrice(product.price)} /></li>)}
  </ul>
}

export default ProductList
