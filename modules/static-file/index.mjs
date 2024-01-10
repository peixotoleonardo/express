import express from 'express';

import { app, listen } from '../common/index.mjs';

app.use('/public', express.static(new URL('assets', import.meta.url).pathname));

app.use(express.static(new URL('assets', import.meta.url).pathname));

listen(app);