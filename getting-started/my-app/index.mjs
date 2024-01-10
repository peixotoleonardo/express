import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});
