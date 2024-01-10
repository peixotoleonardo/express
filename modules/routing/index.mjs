import { app, listen } from '../common/index.mjs';

app
  .get('/', (_, res) => {
    res.send('Hello World!')
  })
  .post('/', (_, res) => {
    res.send('Got a POST request')
  })
  .put('/user', (_, res) => {
    res.send('Got a PUT request at /user')
  })
  .delete('/user', (_, res) => {
    res.send('Got a DELETE request at /user')
  });

listen(app);