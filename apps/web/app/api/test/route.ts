export async function GET(request: Request) {
  // simulate loading time
  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 3000)
  })

  return Response.json({
    content: JSON.stringify(
      {
        a: 'test',
        b: 123,
        c: 'what do you looking for?'
      },
      null,
      4
    )
  })
}

export async function POST(request: Request) {
  const { content, fileName } = await request.json()

  console.log(fileName)

  return Response.json({
    message: 'OK'
  })
}
