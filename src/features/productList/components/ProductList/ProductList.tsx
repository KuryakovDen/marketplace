import ProductItem from '../ProductItem/ProductItem.tsx'
import { MOCK_PRODUCTS } from '../../mocks'
import getProductPrice from '../../utils/getProductPrice.ts'
// Поправить типы
import styles from './ProductList.module.css'

function ProductList() {
  return <ul className={styles.productList}>
    {MOCK_PRODUCTS.map((product) =>
      <li key={product.id} className={styles.productItem}>
        <ProductItem
          {...product}
          price={getProductPrice(product.price)}
          onProductClick={() => {}}
          onFavouriteClick={() => {}}
        />
    </li>)}
  </ul>
}

export default ProductList
