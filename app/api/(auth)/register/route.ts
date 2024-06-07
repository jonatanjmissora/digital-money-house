import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SWAGGER = "https://digitalmoney.digitalhouse.com/"

type ResObjTypes = {
  status: number;
  response: { account_id?: number; email?: string, user_id?: number, error?: string };
  error: string;
}

export async function POST(request: NextRequest) {

  let resObj: ResObjTypes = {
    status: 500,
    response: { account_id: 0, email: "", user_id: 0, error: "" },
    error: "",
  }
  console.log("Entro")
  try {

    let res = await request.json();
    res = { ...res, dni: parseInt(res.dni, 10) }
    const data = await fetch("https://digitalmoney.digitalhouse.com/api/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res),
    });

    if (!data.ok) {
      if (data.status === 409) resObj.error = "Email ya registrado";
    }

    resObj.response = await data.json()
    if (resObj.response?.account_id) {
      cookies().set('swagger_account_id', JSON.stringify(resObj.response?.account_id));
      cookies().set('swagger_email', JSON.stringify(resObj.response?.email));
      cookies().set('swagger_user_id', JSON.stringify(resObj.response?.user_id));
    }

    console.log("ROUTE status: ", data.status)
    resObj.status = data.status;

  } catch (e) {
    if (e instanceof Error)
      resObj.error = "Fallo al conectar"
  }
  console.log("ROUTE response: ", resObj.response)
  console.log("ROUTE error: ", resObj.error)
  return NextResponse.json(resObj);

}