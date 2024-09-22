import styles from './Money.module.css'
import { Price } from '../../types/commonTypes.ts'

type MoneyProps = {
  price: Price
}

function Money({ price }: MoneyProps) {
  const { currency, amount } = price

  // TODO Добавить округление
  return <b className={styles.price}>{currency}{amount}</b>
}

export default Money
