import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from './env';
import postgres = require('postgres');


export const connectDB = async () => {
  const client = postgres(env.DATABASE_URL, { prepare: false })
  const db = drizzle(client);

  console.log("database connected");
}