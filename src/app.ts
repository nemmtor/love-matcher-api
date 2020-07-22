import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
app.use(cors());

// Routes
app.use('/match', routes.match);

export default app;
