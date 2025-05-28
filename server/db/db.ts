// server/db.ts
import Pool from ...;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'ton_user',
  password: 'ton_password',
  database: 'ta_db',
});

export default pool;
