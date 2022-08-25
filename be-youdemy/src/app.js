import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth/authRoutes.js';

import morgan from './middleware/morgan.js';
import { protectRoute } from './middleware/auth.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan);
app.use(protectRoute());

app.use('/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
