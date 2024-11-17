import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './ProductList.module.css'
import useGetProductList from '../../hooks/useGetProductList.ts'
import { Product } from '../../../../shared/types/product/Product.types.ts'
import useIntersectionObserver from '../../../../shared/hooks/useIntersectionObserver.ts'
import { MutableRefObject, useCallback } from 'react'

function ProductList() {
  const {
    data,
    fetchNextPage: fetchNextProducts,
    hasNextPage,
    isLoading: isProductListLoading,
    isFetchingNextPage
  } = useGetProductList();

  const intersectionRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        void fetchNextProducts();
      }
    },
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

  const products: Product[] = data?.pages.flatMap(page => page.products) || [];

  return (
    <ul className={styles.productList}>
      {products.map((product, index) => (
        <li
          key={product.id}
          className={styles.productItem}
          ref={index === products.length - 1 ? lastProductRef : undefined}
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
