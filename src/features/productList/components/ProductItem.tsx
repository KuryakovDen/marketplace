import { MouseEventHandler, useCallback } from 'react'

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

  return <div onClick={onClick}>
    <strong>{title}</strong>
    <span>{description}</span>
    <span>{price}</span>
  </div>
}

export default ProductItem;
