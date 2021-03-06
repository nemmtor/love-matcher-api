import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

import latency from './middlewares/latency';
import routes from './routes';

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 100,
  delayMs: 500,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(limiter);
app.use(speedLimiter);
app.use(latency);

// Routes
app.use('/match', routes.match);

export default app;
