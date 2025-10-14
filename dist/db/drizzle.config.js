import { DATABASE_URL, TYPE_DATABASE } from "../config/app.config.js";
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: TYPE_DATABASE,
  dbCredentials: {
    url: DATABASE_URL
  }
});