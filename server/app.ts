import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import showRouter from './api/routes/showRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/shows', showRouter);

mongoose.Promise = global.Promise;

const db = "mongodb://127.0.0.1/tvdb-server";

mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected."))
  .catch(err => console.log(err));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${ port }`));