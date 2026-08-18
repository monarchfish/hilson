/**
 * GET handler — return a sample JSON payload after a simulated delay.
 */
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

/**
 * POST handler — receive file content and respond with a confirmation.
 */
export async function POST(request: Request) {
  const { fileName } = await request.json()

  return Response.json({
    message: `OK: received ${fileName}`
  })
}
