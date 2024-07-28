'use client';

import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </div>
    </nav>
  );
}