import express from 'express';
import path from 'path';

import morgan from './middleware/morgan.js';

const app = express();

app.use(morgan);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
