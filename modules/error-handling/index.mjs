import wrap from 'express-async-handler';

import { app, listen } from '../common/index.mjs';

const asyncFnWithError = async () => {
  throw new Error('test async');
};

app
  .get('/', () => {
    throw new Error('test');
  })
  .get('/async', asyncFnWithError)
  .get('/promise', () => Promise.reject(new Error('test promise')))
  .get('/wrapper', wrap(asyncFnWithError));

listen(app);