import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './ProductList.module.css'
import useGetProductList from '../../hooks/useGetProductList.ts'

function ProductList() {
  const { data, isLoading: isProductListLoading } = useGetProductList();

  if (isProductListLoading) {
    // TODO Сделать спиннер/скелетон загрузки
  }

  const { products } = data || {};

  return <ul className={styles.productList}>
    {products?.map((product) =>
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
