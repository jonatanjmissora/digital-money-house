export async function GET() {

  const data = { msj: "Hola mundo" }

  return Response.json({ data })
}