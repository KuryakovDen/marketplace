import { useCallback } from 'react'
import { FaPlus as PlusIcon } from "react-icons/fa6";
import styles from './ProductItem.module.css'
import Money from '../../../../shared/ui/Money/Money.tsx'
import { Price } from '../../../../shared/types/commonTypes.ts'
import Button from '../../../../shared/ui/Button/Button.tsx'
import FavouriteButton from '../../../../shared/ui/FavouriteButton/FavouriteButton.tsx'
import Header from '../../../../shared/ui/Header/Header.tsx'

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
  const TEST_ID = 1

  const handleProductClick = useCallback(() => {
    onProductClick(TEST_ID);
  }, [onProductClick])

  const handleProductFavoriteClick = useCallback(() => {
    onFavouriteClick(TEST_ID);
  }, [onFavouriteClick])

  const handleProductAddCartClick = useCallback(() => {
    if (onCartAdd) {
      onCartAdd(TEST_ID);
    }

  }, [onCartAdd])

  return <div className={styles.root} onClick={handleProductClick}>
    <div className={styles.textWrapper}>
      <img
        src={image}
        height={160}
        className={styles.image}
        alt={`${title} image`}
      />
      <Header
        level={'h2'}
      >
        {title}
      </Header>
      <span className={styles.description}>{description}</span>
      <FavouriteButton
        isFavourite={isFavourite}
        onClick={handleProductFavoriteClick}
        className={styles.favouriteButton}
      />
    </div>
    <div className={styles.priceWrapper}>
      <Money price={price} />
      <Button onClick={handleProductAddCartClick} className={styles.buyButton}>
        <PlusIcon />
      </Button>
    </div>
  </div>
}

export default ProductItem
