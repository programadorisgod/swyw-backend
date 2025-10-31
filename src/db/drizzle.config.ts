import { env } from '@src/config/app.config';
import { defineConfig } from 'drizzle-kit';
import type { typeDatabase } from './types/dialect';

const { TYPE_DATABASE, DB_URL } = await env;

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: TYPE_DATABASE as typeDatabase,
    dbCredentials: {
        url: DB_URL,
    },
    schemaFilter: ['core'],
    migrations: {
        schema: 'core',
    },
});
