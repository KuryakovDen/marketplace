import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './ProductList.module.css'
import useGetProductList from '../../hooks/useGetProductList.ts'
import { Product } from '../../../../shared/types/product/Product.types.ts'

function ProductList() {
  const { data, fetchNextPage: fetchNextProducts, hasNextPage, isLoading: isProductListLoading } = useGetProductList();

  if (isProductListLoading) {
    return <div>Loading...</div>; // TODO: Заменить на спиннер/скелетон
  }

  const products: Product[] = data?.pages.flatMap(page => page.products) || [];

  return (
    <ul className={styles.productList}>
      {products.map((product) =>
        <li key={product.id} className={styles.productItem}>
          <ProductItem
            {...product}
            onProductClick={() => {}}
            onFavouriteClick={() => {}}
          />
        </li>
      )}
      {hasNextPage && (
        <li>
          <button onClick={() => fetchNextProducts()}>Load more</button>
        </li>
      )}
    </ul>
  );
}

export default ProductList
