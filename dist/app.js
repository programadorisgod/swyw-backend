import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { createEventRouter } from "./features/Events/routes/event.js";
import { initContainer } from "./container/init-container.js";
const app = express();
initContainer();
app.disable('x-powered-by');
app.use(cors());
app.use(helmet());
app.use(json());
app.use(urlencoded({
  extended: true
}));
app.use(morgan('dev'));

//Routes
app.use(createEventRouter());
app.get('/health', (_req, res) => {
  res.status(200).send('I am ok');
});
export { app };