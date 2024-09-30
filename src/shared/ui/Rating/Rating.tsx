import { useCallback, useState } from 'react'
import styles from './Rating.module.css'
import classNames from 'classnames'

type RatingValue = 1 | 2 | 3 | 4 | 5

type RatingProps = {
  initialRating: RatingValue
  onRatingChange?: (value: RatingValue) => void
}

function Rating({ initialRating, onRatingChange }: RatingProps) {
  const [rating, setRating] = useState<RatingValue>(initialRating)

  const MAX_RATING_LENGTH = 5
  const ratingNumbers: number[] = Array.from({ length: MAX_RATING_LENGTH }, (_, index) => index + 1);

  const handleRatingClick = useCallback((value) => {
    setRating(value);

    if (onRatingChange) {
      onRatingChange(value);
    }

  }, [onRatingChange]);

  return <div className={styles.root}>
    {ratingNumbers.map((value) => (
      <span
        key={value}
        onClick={() => handleRatingClick(value)}
        className={classNames(styles.rating, {
          [styles.selectedRating]: value <= rating,
          [styles.unselectedRating]: value > rating
        })}
      >
        ★
      </span>
    ))}
  </div>
}

export default Rating;
