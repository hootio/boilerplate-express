import express from 'express';

import versionRouter from './version';

const router = express.Router();

router.use('/version', versionRouter);

router.get('', (req, res) => {
  res.send('Hello world, welcome to Express.js Boilerplate!');
});

export default router;
