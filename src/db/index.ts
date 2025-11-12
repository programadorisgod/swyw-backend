import { loadEnv } from '@src/config/app.config';
import { drizzle } from 'drizzle-orm/postgres-js';

const { DB_URL } = loadEnv();
export const db = drizzle(DB_URL);
