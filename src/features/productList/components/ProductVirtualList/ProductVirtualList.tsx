import styles from './ProductVirtualList.module.css'
import { Product } from '../../../../shared/types/product/Product.types.ts'
import ProductItem from '../ProductItem/ProductItem.tsx'
import useVirtualScroll from '../../../../shared/hooks/useVirtualScroll.ts'

type ProductVirtualListProps = {
  products: Product[]
}

function ProductVirtualList({ products }: ProductVirtualListProps) {
  const productItemHeight = 265

  const { containerRef, visibleItems, scrollHeight } =
    useVirtualScroll(products, productItemHeight);

  return (
    <div className={styles.root} ref={containerRef} style={{ height: scrollHeight }}>
      {visibleItems.map((product) =>
        <ProductItem
          key={product.id}
          {...product}
          onProductClick={() => {}}
          onFavouriteClick={() => {}}
        />)
      }
    </div>
  );
}

export default ProductVirtualList;
