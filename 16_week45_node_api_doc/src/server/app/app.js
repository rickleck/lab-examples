import express from 'express';
import cors from 'cors';
import { controller } from './controllers/task-controller.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', controller);

export { app };
