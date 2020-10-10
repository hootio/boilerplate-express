import cors from 'cors';
import express from 'express';
import { json } from 'body-parser';

import routes from './routes';

const app = express();

app.use(cors());
app.use(json());

app.use('/', routes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send('Something broke :(');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

export default app;
