import express from 'express';

const versionRouter = express.Router();
versionRouter.get('', (req, res) => {
  res.send(process.env.VERSION || '0.0.0');
});

export default versionRouter;
