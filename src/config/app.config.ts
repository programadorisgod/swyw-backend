import { z } from 'zod';
import { readSecrets } from './vault';

const enviromentVariables = z.object({
    PORT: z.string().min(4).max(5).default('3000'),
    DATABASE_URL_DEV: z
        .string()
        .min(1)
        .default('postgresql://user:password@localhost:5432/dbname'),
    TYPE_DATABASE: z.string().default('postgresql'),
    GEMINI_API_KEYI: z.string().default('GEMINI_API_KEYI'),
    GITHUB_TOKEN: z.string().default('GITHUB_TOKEN'),
    ENV_MODEL_AI: z.string().default('openAI'),
    DATABASE_URL_PROD: z
        .string()
        .min(1)
        .default('postgresql://user:password@localhost:5432/dbname'),
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),
    URL_USER_SERVICE: z.string().min(1).default('http://URL_USER_SERVICE:4000'),
    AI_URL: z.string().min(1).default('http://AI_URL:5000'),
});

export const loadEnv = async () => {
    const secrets = await readSecrets();
    const result = enviromentVariables.safeParse(secrets);

    if (!result.success) {
        console.error('Invalid environment variables:', result.error);
        throw new Error('Invalid environment variables');
    }

    const data = result.data;

    const DB_URL =
        data.NODE_ENV === 'development'
            ? data.DATABASE_URL_DEV
            : data.DATABASE_URL_PROD;

    return {
        ...data,
        DB_URL,
    };
};

export const env = loadEnv();
