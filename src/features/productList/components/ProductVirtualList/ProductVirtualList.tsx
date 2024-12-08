import styles from './ProductVirtualList.module.css'
import { IProduct } from '../../../../shared/types/product/productTypes.ts'
import ProductItem from '../ProductItem/ProductItem.tsx'
import useVirtualScroll from '../../../../shared/hooks/useVirtualScroll.ts'

type ProductVirtualListProps = {
  products: IProduct[]
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
