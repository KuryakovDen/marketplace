import { MouseEventHandler, useCallback } from 'react'
import styles from './ProductItem.module.css'

type ProductItemProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  onCartAdd?: (event: MouseEvent) => void;
  onCartRemove?: (event: MouseEvent) => void;
  onProductClick?: MouseEventHandler<HTMLDivElement>
}

function ProductItem({ title, description, price, onProductClick, onCartAdd }: ProductItemProps) {
  const onClick = useCallback(() => onProductClick, [])

  const onAddCartButtonClick = useCallback(() => onCartAdd, [])

  return <div className={styles.root} onClick={onClick}>
    <strong>{title}</strong>
    <span>{description}</span>
    <div className={styles.priceWrapper}>
      <b className={styles.price}>{price}</b>
      {/* TODO Заменить на компонент IconButton */}
      <button className={styles.addButton} onClick={onAddCartButtonClick}>+</button>
    </div>
  </div>
}

export default ProductItem
