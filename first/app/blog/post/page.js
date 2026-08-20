'use client';
import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Post() {
    return (
        <>
        <Navigation />
            <h1>Post</h1>
            <p>This is a blog post from a sub site</p>
            <nav>
                <Link href="/">Back to home</Link>
            </nav>
        </>
    );
}