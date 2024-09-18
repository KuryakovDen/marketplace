import { MouseEventHandler, useCallback } from 'react'
import styles from './ProductItem.module.css'
// import ProductImage from '../../../../shared/assets/images/test_image.jpg'

type ProductItemProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  onCartAdd?: (event: MouseEvent) => void;
  onCartRemove?: (event: MouseEvent) => void;
  onProductClick?: MouseEventHandler<HTMLDivElement>
}

function ProductItem({ title, description, price, onProductClick }: ProductItemProps) {
  const onClick = useCallback(() => onProductClick, [])

  return <div className={styles.root} onClick={onClick}>
    {/*<ProductImage />*/}
    <strong>{title}</strong>
    <span>{description}</span>
    <span>{price}</span>
  </div>
}

export default ProductItem;
