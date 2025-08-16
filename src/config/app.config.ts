import { z } from 'zod';
const enviromentVariables = z.object({
    PORT: z.string().min(4).max(5).default('3000'),
    DATABASE_URL: z
        .string()
        .min(1)
        .default('postgresql://user:password@localhost:5432/dbname'),
    TYPE_DATABASE: z.string().default('postgresql'),
});

const { success, error, data } = enviromentVariables.safeParse(process.env);

if (!success) {
    console.error('Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
}

export const { DATABASE_URL, PORT, TYPE_DATABASE } = data;
