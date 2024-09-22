import { useCallback } from 'react'
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import styles from './ProductItem.module.css'
import classNames from 'classnames';
import Money from '../../../../shared/ui/Money/Money.tsx'
import { Price } from '../../../../shared/types/commonTypes.ts'
import { Product } from '../../../../shared/types/product/Product.types.ts'

type ProductItemProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: Price;
  isFavourite: boolean;
  onProductClick: (productId: number) => void;
  onFavouriteClick: (productId: number) => void;
  onCartAdd?: (productId: number) => void;
  onCartRemove?: (productId: number) => void;
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
  const handleProductClick = useCallback((e) => {
    const product: Product = e.target.value;

    onProductClick(product.id);
  }, [onProductClick])

  const handleProductFavoriteClick = useCallback((e) => {
    const product: Product = e.target.value;

    onFavouriteClick(product.id);
  }, [onFavouriteClick])

  const handleProductAddCartClick = useCallback((e) => {
    const product: Product = e.target.value;

    if (onCartAdd) {
      onCartAdd(product.id);
    }

  }, [onCartAdd])

  return <div className={styles.root} onClick={handleProductClick}>
    <div className={styles.textWrapper}>
      <img src={image} height={160} alt={`${title} image`} />
      {/* TODO Заменить на компонент Header */}
      <strong className={styles.title}>{title}</strong>
      <span className={styles.description}>{description}</span>
      {/* TODO Заменить на компонент IconButton -> FavouriteButton  */}
      <button
        className={classNames(styles.favouriteButton, {
          [styles.favourite]: isFavourite,
      })}
        onClick={handleProductFavoriteClick}
      >
        {isFavourite ? <MdFavorite /> : <GrFavorite />}
      </button>
    </div>
    <div className={styles.priceWrapper}>
      <Money price={price} />
      {/* TODO Заменить на компонент IconButton */}
      <button className={styles.addButton} onClick={handleProductAddCartClick}>
        <FaPlus />
      </button>
    </div>
  </div>
}

export default ProductItem
