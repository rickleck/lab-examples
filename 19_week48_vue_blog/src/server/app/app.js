import express from 'express';
import history from 'connect-history-api-fallback';
import cors from 'cors';
import path from 'path';
import { controller } from './controllers/blog-controller.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(process.env.API_BASE_URL, controller);
app.use(history());
app.use(express.static(path.resolve('dist', 'public')));

export { app };
