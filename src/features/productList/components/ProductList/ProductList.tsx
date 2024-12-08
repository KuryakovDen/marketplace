import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './ProductList.module.css'
import useGetProductList from '../../../../entities/Product/hooks/useGetProductList.ts'
import useIntersectionInfiniteScroll from '../../../../shared/hooks/useIntersectionInfiniteScroll.ts'
import { MutableRefObject, useCallback } from 'react'

function ProductList() {
  const {
    products,
    fetchNextPage: fetchNextProducts,
    hasNextPage,
    isLoading: isProductListLoading,
    isFetchingNextPage
  } = useGetProductList();

  const intersectionRef = useIntersectionInfiniteScroll({
    onIntersect: fetchNextProducts,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  const lastProductRef = useCallback((node: HTMLLIElement | null) => {
    if (node !== null) {
      (intersectionRef as MutableRefObject<HTMLElement | null>).current = node;
    }
  }, [intersectionRef]);

  if (isProductListLoading) {
    return // TODO Заменить на спиннер/скелетон
  }

  if (!products.length) {
    return null
  }

  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li
          key={product.id}
          className={styles.productItem}
          ref={lastProductRef}
        >
          <ProductItem
            {...product}
            // TODO Сделать редирект на страницу продукта
            onProductClick={() => {}}
            // TODO Выполнить запрос на добавление в избранное
            onFavouriteClick={() => {}}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
