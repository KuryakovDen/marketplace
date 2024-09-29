import Button from '../Button/Button.tsx'
import { useCallback } from 'react'
import { FcLike as FavouriteIcon } from "react-icons/fc";
import { GrFavorite as NotSelectedFavouriteIcon } from "react-icons/gr";
import styles from './FavouriteButton.module.css'
import classNames from 'classnames'


type FavouriteButtonProps = {
  isFavourite: boolean;
  onClick: () => void;
  className?: string;
}

function FavouriteButton({ isFavourite, onClick, className }: FavouriteButtonProps) {
  const onFavouriteButtonClick = useCallback(() => onClick, [onClick])

  return <Button
    className={classNames(styles.root, className)}
    onClick={onFavouriteButtonClick}>
    {isFavourite ? <FavouriteIcon /> : <NotSelectedFavouriteIcon />}
  </Button>
}

export default FavouriteButton
