import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './ProductList.module.css'
import useGetProductList from '../../hooks/useGetProductList.ts'
import { Product } from '../../../../shared/types/product/Product.types.ts'
import { useCallback, useEffect, useRef } from 'react'

function ProductList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading: isProductListLoading,
    isFetchingNextPage
  } = useGetProductList();

  const observerTarget = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const option = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [handleObserver]);

  if (isProductListLoading) {
    return <div>Loading...</div>; // TODO: Заменить на спиннер/скелетон
  }

  const products: Product[] = data?.pages.flatMap(page => page.products) || [];

  return (
    <>
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
      </ul>
      {hasNextPage && (
        <div ref={observerTarget} style={{ height: '20px', margin: '20px 0' }}>
          {isFetchingNextPage ? 'Loading more...' : ''}
        </div>
      )}
    </>
  );
}

export default ProductList;
