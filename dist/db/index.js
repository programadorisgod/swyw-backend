import { DATABASE_URL } from "../config/app.config.js";
import { drizzle } from 'drizzle-orm/postgres-js';
export const db = drizzle(DATABASE_URL);