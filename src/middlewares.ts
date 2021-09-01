import morgan from 'morgan';
import config from './config';
import express from 'express';

morgan.token('body', (req: express.Request) => JSON.stringify(req.body));

export const requestLogger = config.isDevelopment
  ? morgan(
    ':method :url :status :res[content-length] - :response-time ms :body',
  )
  : morgan('combined');


export const notFound = () => (req: express.Request, res: express.Response) => {
  res.status(404);

  if (req.accepts('json')) {
    res.send({
      error: 'Not found',
    });
  } else {
    res.type('txt').send('Not found');
  }
};
