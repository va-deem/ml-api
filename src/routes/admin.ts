import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  const testResponse = { test: true, status: 'success' };

  res.json(testResponse);
});

export default router;
