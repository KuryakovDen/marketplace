import { ReactNode, useCallback } from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

function Button({ children, onClick, className }: ButtonProps){
  const onButtonClick = useCallback(() => onClick, [onClick])

  return <button
    className={classNames(styles.root, className)}
    onClick={onButtonClick}
  >
    {children}
  </button>
}

export default Button
