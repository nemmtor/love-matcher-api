import express from 'express';
import routes from './routes';

const app = express();

app.use('/match', routes.match);

export default app;
