import ProductItem from '../ProductItem/ProductItem.tsx'
import getProductPrice from '../../utils/getProductPrice.ts'
import styles from './ProductList.module.css'
import { Product } from '../../../../shared/types/product/Product.types.ts'

type ProductListProps = {
  products: Product[]
}

function ProductList({ products } : ProductListProps) {
  return <ul className={styles.productList}>
    {products.map((product) =>
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
