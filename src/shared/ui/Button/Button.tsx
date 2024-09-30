import { ReactNode, useCallback } from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, className, disabled }: ButtonProps){
  return <button
    className={classNames(styles.root, className, {
      [styles.disabled]: disabled
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
}

export default Button
