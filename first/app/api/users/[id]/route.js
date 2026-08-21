import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'Wellu', age: 42 },
  { id: 2, name: 'Pasi', age: 30 },
  { id: 3, name: 'Mikko', age: 25 },
];

export async function GET(req, { params }) {
  const { id } = params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}
