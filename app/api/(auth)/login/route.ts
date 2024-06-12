import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const SWAGGER = "https://digitalmoney.digitalhouse.com/"

type ResObjType = {
  status: number;
  response: { token?: string; error?: string };
  error: string;
}

export async function POST(request: NextRequest) {

  let resObj: ResObjType = {
    status: 500,
    response: {},
    error: "",
  }
  try {
    const res = await request.json();
    const data = await fetch(`${SWAGGER}api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res),
    });

    if (!data.ok) {
      if (data.status === 401) resObj.error = "La contraseña no corresponde al usuario";
      if (data.status === 404) resObj.error = "Usuario no registrado";
    }
    resObj.response = await data.json()
    if (resObj.response?.token) {
      const JWTdecoded = jwtDecode(resObj.response?.token);
      console.log({ JWTdecoded });
      const newExp = Date.now() + JWTdecoded.exp;
      cookies().set('swagger_token', resObj.response?.token, { expires: newExp, httpOnly: true })
      console.log("guarde token en cookies")
    }
    resObj.status = data.status;
  } catch (e) {
    if (e instanceof Error)
      resObj.error = "Fallo al conectar"
  }
  console.log(resObj)
  return NextResponse.json(resObj);
}