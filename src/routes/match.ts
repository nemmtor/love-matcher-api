import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const { name1, name2 } = req.query;
  if (!name1 || !name2)
    return res.status(400).json({ error: 'Invalid names!' });
  return res.status(200).json({ name1, name2 });
});

export default router;
