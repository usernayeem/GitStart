import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check Route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'GitStart backend is running smoothly!' });
});

// We will add more modular routes here later (e.g., Auth, Quizzes, Modules, etc.)

export default app;
