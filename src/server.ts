import 'dotenv/config';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.APP_PORT || 3333, () => {
  console.log(`Server is running at por ${process.env.APP_PORT}`);
});
