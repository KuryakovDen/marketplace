import { ReactNode } from 'react'

type HeaderLevel = 'h1' | 'h2' | 'h3'

type HeaderProps = {
  level: HeaderLevel
  children: ReactNode
}

function Header({ level: HeaderTag, children }: HeaderProps) {
  return <HeaderTag>{children}</HeaderTag>
}

export default Header;
