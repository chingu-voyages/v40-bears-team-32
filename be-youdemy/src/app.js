import express from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth/authRoutes.js';
import videoRoutes from './routes/video/videoRoutes.js';

import morgan from './middleware/morgan.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan);

app.use('/auth', authRoutes);
app.use('/videos', videoRoutes);

export default app;
