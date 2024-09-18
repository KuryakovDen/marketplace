import { MouseEventHandler } from 'react'
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import styles from './ProductItem.module.css'
import classNames from 'classnames';

type ProductItemProps = {
  id: number;
  title: string;
  description: string;
  price: string;
  isFavourite: boolean;
  onProductClick: MouseEventHandler<HTMLDivElement>;
  onFavouriteClick: MouseEventHandler<HTMLButtonElement>;
  onCartAdd?: MouseEventHandler<HTMLButtonElement>;
  onCartRemove?: MouseEventHandler<HTMLButtonElement>;
}

function ProductItem({ title, description, price, isFavourite, onFavouriteClick, onProductClick, onCartAdd }: ProductItemProps) {
  return <div className={styles.root} onClick={onProductClick}>
    <div className={styles.textWrapper}>
      <strong className={styles.title}>{title}</strong>
      <span className={styles.description}>{description}</span>
      {/* TODO Заменить на компонент IconButton */}
      <button className={classNames(styles.favouriteButton, {
        [styles.favourite]: isFavourite
      })} onClick={onFavouriteClick}>
        {isFavourite ? <MdFavorite /> : <GrFavorite /> }
      </button>
    </div>
    <div className={styles.priceWrapper}>
      <b className={styles.price}>{price}</b>
      {/* TODO Заменить на компонент IconButton */}
      <button className={styles.addButton} onClick={onCartAdd}><FaPlus /></button>
    </div>
  </div>
}

export default ProductItem
