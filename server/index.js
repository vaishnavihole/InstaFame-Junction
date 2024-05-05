import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {apiV1Signup, apiV1Login, apiV1Update} from "./controllers/user/user.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/v1/signup", apiV1Signup);
app.post("/api/v1/login", apiV1Login);
app.put("/api/v1/update", apiV1Update);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB 📦');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT} 🚀`);
    });
  })
  .catch((error) => {
    console.error(`❌ Error connecting to database: ${error.message}`);
  });
