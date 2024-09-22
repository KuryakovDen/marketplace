import { Price } from '../../types/product/Product.types.ts'
import styles from './Money.module.css'

type MoneyProps = {
  price: Price
}

function Money({ price }: MoneyProps) {
  const { currency, amount } = price

  // TODO Добавить округление
  return <b className={styles.price}>{currency}{amount}</b>
}

export default Money
