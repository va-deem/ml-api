import express from 'express';
import apiRouter from './routes/api';
import adminRouter from './routes/admin';
import config from './config';
import { requestLogger, notFound } from './middlewares';

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use('/api', apiRouter);
app.use('/admin', adminRouter);
app.use(notFound());

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
