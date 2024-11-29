export async function GET(request: Request) {
  console.dir(request)

  return new Response('Hello, from API!')
}

export async function POST(request: Request) {
  const { content, fileName } = await request.json()

  console.log(fileName)

  return Response.json({
    message: 'OK'
  })
}
