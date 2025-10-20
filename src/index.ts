import { app } from './app';
import { PORT } from '@src/config/app.config';

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection:', reason);
});

process.on('exit', (code) => {
    console.log(`Process exiting with code ${code}`);
});
