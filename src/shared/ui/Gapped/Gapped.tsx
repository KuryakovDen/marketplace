import styles from './Gapped.module.css'
import { ReactNode } from 'react'
import classNames from 'classnames'

type Direction = 'row' | 'column'

type GappedProps = {
  children: ReactNode;
  gap?: number;
  direction?: Direction;
}

function Gapped({ children, direction = 'row', gap }: GappedProps) {
  return <div
    className={classNames(styles.root, {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column'
    })}
    style={{ 'gap': `${gap}px` }}
  >{children}</div>
}

export default Gapped;
