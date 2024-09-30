import styles from './ProductVirtualList.module.css'
import { Product } from '../../../../shared/types/product/Product.types.ts'

type ProductVirtualListProps = {
  products: Product[]
}

function ProductVirtualList({ products }: ProductVirtualListProps) {
  return <div className={styles.root}>ProductVirtualList</div>
}

export default ProductVirtualList;
