import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = await params;
  return NextResponse.json({ productId: id, name: 'Toycar', price: 4.99, description: 'A toy car for children.' });
}