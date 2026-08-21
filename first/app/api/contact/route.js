import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  if (!body.name || !body.message) {
    return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
  }
  return NextResponse.json({ name: body.name, message: body.message }, { status: 201 });
}