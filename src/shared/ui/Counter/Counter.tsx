import Button from '../Button/Button.tsx'
import { useState } from 'react'
import { FaPlus as PlusIcon } from "react-icons/fa6";
import { FaMinus as MinusIcon } from "react-icons/fa";
import styles from './Counter.module.css'

type CounterProps = {
  initialCount?: number
  maxCount: number
}

function Counter({ initialCount, maxCount }: CounterProps) {
  const [count, setCount] = useState(initialCount || 1);

  const onIncrementClick = () => setCount(prevCount => maxCount && count === maxCount ? count : prevCount + 1);
  const onDecrementClick = () => setCount(prevCount => prevCount - 1);

  return <div className={styles.root}>
    <Button
      className={styles.button}
      onClick={onDecrementClick}
      disabled={count === 0}
    >
      <MinusIcon />
    </Button>
    <span>{count}</span>
    <Button
      className={styles.button}
      onClick={onIncrementClick}
      disabled={count === maxCount}
    >
      <PlusIcon />
    </Button>
  </div>
}

export default Counter;
