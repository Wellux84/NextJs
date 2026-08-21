import { NextResponse } from 'next/server';

const posts = [
  { title: 'First Post' },
  { title: 'Second Post' },
  { title: 'Third Post' },
];

export async function GET() {
  return NextResponse.json(posts);
}