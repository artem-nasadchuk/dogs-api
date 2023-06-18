import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { pingRouter } from './routes/pingRouter.js';
import { dogRouter } from './routes/dogRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(pingRouter);
app.use(dogRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
