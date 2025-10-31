import { env } from '@src/config/app.config';
import { drizzle } from 'drizzle-orm/postgres-js';

const { DB_URL } = await env;
export const db = drizzle(DB_URL);
