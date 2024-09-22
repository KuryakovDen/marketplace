import { MouseEventHandler } from 'react'
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import styles from './ProductItem.module.css'
import classNames from 'classnames';

type ProductItemProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  isFavourite: boolean;

  // Тут я бы сделал тип что-то вроде 
  // onProductClick: (id: number) => void;
  // Потому что MouseEventHandler тип специфичен для компонента и получается что вышестоящему нужно знать про этот тип
  // Это усложнить перенос компонента на другой UI например фреймворк, у которого другой тип событий
  onProductClick: MouseEventHandler<HTMLDivElement>;
  onFavouriteClick: MouseEventHandler<HTMLButtonElement>;
  onCartAdd?: MouseEventHandler<HTMLButtonElement>;
  onCartRemove?: MouseEventHandler<HTMLButtonElement>;
}

function ProductItem(
  {
    image,
    title,
    description,
    price,
    isFavourite,
    onFavouriteClick,
    onProductClick,
    onCartAdd
  }: ProductItemProps
) {

  // const handleProductClick = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
  //   onProductClick(e.target.value);
  // })

  return <div className={styles.root} onClick={onProductClick}>
    <div className={styles.textWrapper}>
      <img src={image} height={160} alt={`${title} image`} />
      {/* TODO Заменить на компонент Header */}
      <strong className={styles.title}>{title}</strong>
      <span className={styles.description}>{description}</span>
      {/* тут наверное больше похоже на компонент FavoriteButton */}
      {/* TODO Заменить на компонент IconButton */}
      <button
        className={classNames(styles.favouriteButton, {
          [styles.favourite]: isFavourite,
      })}
        onClick={onFavouriteClick}
      >
        {isFavourite ? <MdFavorite /> : <GrFavorite />}
      </button>
    </div>
    <div className={styles.priceWrapper}>
      <b className={styles.price}>{price}</b>
      {/* TODO Заменить на компонент IconButton */}
      <button className={styles.addButton} onClick={onCartAdd}>
        <FaPlus />
      </button>
    </div>
  </div>
}

export default ProductItem
