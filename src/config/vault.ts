import vault from 'node-vault';

const vaultClient = vault({
    apiVersion: process.env.VAULT_API_VERSION,
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN,
});

export const readSecrets = async () => {
    const secrets = await vaultClient.read('kv/data/backend-events');
    return secrets.data.data;
};
