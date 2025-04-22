import { Pool } from "pg";

let pool: Pool;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: "postgres://root:root@localhost:5432/live049",
    });
  }

  return pool;
}

export async function query(query: string, values?: any[]) {
  const pool = getPool();

  const client = await pool.connect();

  try {
    const { rows } = await client.query(query, values);

    return { rows };
  } finally {
    client.release();
  }
}
