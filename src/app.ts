import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler } from '../src/middlewares/errorHandler';
import { loggerMiddleware } from '../src/middlewares/requestLogger';
import authRouters from './routes/authRouters';

const app = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
// Custom request logger middleware
app.use(loggerMiddleware);

// Routes setup

app.use('/api/auth', authRouters);
app.use('/', () => {
  console.log('API is working');
  return;
});

//end routes setup

// Error handling middleware
app.use(errorHandler);

export default app;
