import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const body = await req.json()

  const bcryptcomp = bcrypt.compareSync("pass123", body.hashPassword);
  if (bcryptcomp) {
    return NextResponse.json(body)
  }
  return NextResponse.json(false);
}