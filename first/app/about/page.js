'use client';
import Link from 'next/link';
import Navigation from '../../app/components/Navigation';

export default function About() {
return (
<>
<Navigation />
<h1> About this course</h1>
<p>This course teaches fundamentals of Next.js</p>
<nav>
    <Link href="/">Back to home</Link>
</nav>
</>
);
}
