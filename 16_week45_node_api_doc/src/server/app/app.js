import express from 'express';
import cors from 'cors';
import { controller } from './controllers/tasks-controller.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/tasks', controller);

export { app };
