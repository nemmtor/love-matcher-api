import { Router } from 'express';

import calculateRating from '../utils/calculateRating';

const router = Router();

router.get('/', (req, res) => {
  const { name1, name2 } = req.query;
  if (!name1 || !name2)
    return res.status(400).json({ error: 'Invalid names!' });

  const rating = calculateRating(name1 as string, name2 as string);

  return res.status(200).json({ name1, name2, rating });
});

export default router;
