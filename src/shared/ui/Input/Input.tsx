import { ReactNode, useCallback, useState } from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'

type InputProps = {
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  additionalContent?: ReactNode;
  className?: string;
}

function Input({
   defaultValue,
   onChange, placeholder,
   additionalContent,
   className
}: InputProps) {
  const [value, setValue] = useState(defaultValue || '')

  const onInputChange = useCallback((e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }, [onChange])

  return <div className={styles.root}>
    <input
      type={'text'}
      value={value}
      onChange={onInputChange}
      placeholder={placeholder}
      className={classNames(styles.input, className)}
    />
    <div className={styles.additionalContent}>{additionalContent}</div>
  </div>
}

export default Input
