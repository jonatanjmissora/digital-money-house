import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API_URL = 'https://digitalmoney.digitalhouse.com/service';

export async function GET() {
  const user_id = cookies().get("swagger_user_id")?.value ?? "";
  const token = cookies().get("swagger_token")?.value ?? "";
  const data = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${user_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": token
    },
  });

  const res = await data.json()
  return NextResponse.json(res);
}