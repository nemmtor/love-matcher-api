import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

import routes from './routes';

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 5, // allow 5 requests per 15 minutes, then...
  delayMs: 1000, // begin adding 1000ms of delay per request above 100:
  // request # 6 is delayed by  1000ms
  // request # 7 is delayed by 2000ms
  // request # 8 is delayed by 3000ms
  // etc.
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const app = express();
app.use(cors());
app.use(limiter);
app.use(speedLimiter);

// Routes
app.use('/match', routes.match);

export default app;
