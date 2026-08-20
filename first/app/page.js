 'use client';
 import Link from "next/link";
import styles from './app.module.css';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Card from './components/Card';
import AppLayout from './components/AppLayout';
import Alert from './components/Alert';
import ProfileCard from './components/ProfileCard';

export default function Home() {
  return (
    <AppLayout>
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>This is Next.js First Homepage</h1>
      <p className={styles.paragraph}>This is my first Next.js project. I'm learning how to use Next.js.</p>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <br />
      <Button onClick={() => alert('Button clicked!')}>Dare To Click Me</Button>
      <br />
      <Card color="lightblue" />
      <Card color="lightgreen" />
      <Card color="lightcoral" />
      <Alert />
      <ProfileCard
        name="Wellu"
        age={42}
        color="lightblue"
        height="100px" />
      <ProfileCard 
        name="Pasi"
        age={30}
        color="lightgreen"
        width="100px" />
    </div>

    </AppLayout>
  );
}
