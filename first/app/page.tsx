 'use client';
 import Link from "next/link";
import styles from './app.module.css';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>This is Next.js First Homepage</h1>
      <p className={styles.paragraph}>This is my first Next.js project. I'm learning how to use Next.js.</p>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
