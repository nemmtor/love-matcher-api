import { Router } from 'express';

import calculateRating from '../utils/calculateRating';
import getMessage from '../utils/getMessage';

const router = Router();

router.post('/', (req, res) => {
  const { name1, name2 } = req.body;
  if (!name1 || !name2)
    return res.status(400).json({ error: 'Invalid names!' });

  const rating = calculateRating(name1 as string, name2 as string);
  const message = getMessage(rating);

  return res.status(200).json({ name1, name2, rating, message });
});

export default router;
