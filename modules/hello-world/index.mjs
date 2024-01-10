import { app, listen } from '../common/index.mjs'

app.get('/', (_, res) => {
  res.send('Hello World!');
});

listen(app);
