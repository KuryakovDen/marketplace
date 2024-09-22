import ProductItem from '../ProductItem/ProductItem.tsx'
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
          // TODO Сделать редирект на страницу продукта
          onProductClick={() => {}}
          // TODO Выполнить запрос на добавление в избранное
          onFavouriteClick={() => {}}
        />
    </li>)}
  </ul>
}

export default ProductList
