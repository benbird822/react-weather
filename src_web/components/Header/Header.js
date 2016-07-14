import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">home</Link>{' | '}
      <Link to="/search">search</Link>{' | '}
      <Link to="/my">my</Link>
    </header>
  )
}

export default Header