import { db } from '@vercel/postgres'

/**
 * Query invoices with amount 666 from the database.
 */
async function listInvoices() {
  const client = await db.connect()

  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `

  return data.rows
}

/**
 * GET handler — return invoice records joined with customer names.
 */
export async function GET() {
  try {
    return Response.json(await listInvoices())
  } catch (error) {
    console.error('Failed to list invoices:', error)

    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
