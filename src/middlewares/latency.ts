import { Request, Response, NextFunction } from 'express';

export default function latencyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  setTimeout(() => {
    next();
  }, 1000);
}
