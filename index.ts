import express from 'express';
import mainRouter from './routes/index';

const app = express();
app.use(express.json());

const PORT = 1234;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/app', mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
