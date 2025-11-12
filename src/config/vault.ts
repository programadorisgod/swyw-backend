import vault from 'node-vault';
import fs from 'node:fs';
import { join } from 'node:path';

// const vaultClient = vault({
//     apiVersion: process.env.VAULT_API_VERSION,
//     endpoint: process.env.VAULT_ADDR,
//     token: process.env.VAULT_TOKEN,
// });

export const readSecrets = () => {
    const configPath =
        process.env.CONFIG_PATH ||
        join(process.cwd(), 'src', 'config', 'secret.json');
    const secrets = JSON.parse(fs.readFileSync(configPath!, 'utf-8'));
    return secrets;
};
