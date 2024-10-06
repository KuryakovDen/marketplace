import styles from './Badge.module.css'
import classNames from 'classnames'

type BadgeProps = {
  content: string;
  className?: string;
}

function Badge({ content, className }: BadgeProps) {
  return <span
    className={classNames(styles.root, className)}
  >
    {content}
  </span>
}

export default Badge
