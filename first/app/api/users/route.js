import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'Wellu', age: 42 },
  { id: 2, name: 'Pasi', age: 30 },
  { id: 3, name: 'Mikko', age: 25 },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req) {
  const body = await req.json();
    if (!body.name || !body.age) {
    return NextResponse.json({ error: 'Name and age are required.' }, { status: 400 });
    }
  const newUser = {
    id: users.length + 1,
    name: body.name,
    age: body.age,
  };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}