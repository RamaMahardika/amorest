import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Amo Spa API - Develop by Webfeat Team');
});

export default router;