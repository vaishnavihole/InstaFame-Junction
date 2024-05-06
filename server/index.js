import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {apiV1Signup, apiV1Login, apiV1Update, apiV1AllUsers, apiV1GetUser} from "./controllers/user/user.js";
import {apiv1AddAccount,  apiV1AllAccounts, apiV1GetAccount, apiV1UpdateAccount} from "./controllers/account/account.js";
import {apiv1AddPackage, apiV1AllPackages, apiV1UpdatePackage,  apiV1GetPackage} from "./controllers/package/package.js";
import {apiv1AddDeal, apiV1AllDeals, apiV1GetDeal, apiV1UpdateDeal} from "./controllers/deal/deal.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/v1/signup", apiV1Signup);
app.post("/api/v1/login", apiV1Login);
app.put("/api/v1/update", apiV1Update);
app.get("/api/v1/getAllUsers", apiV1AllUsers);
app.get("/api/v1/getUser/:id", apiV1GetUser);

app.post("/api/v1/addAccount", apiv1AddAccount);
app.get("/api/v1/getAllAccounts", apiV1AllAccounts);
app.get("/api/v1/getAccount/:id", apiV1GetAccount);
app.put("/api/v1/updateAccount/:id", apiV1UpdateAccount);


app.post("/api/v1/addPackage", apiv1AddPackage);
app.get("/api/v1/getAllPackages", apiV1AllPackages);
app.get("/api/v1/getPackage/:id", apiV1GetPackage);
app.put("/api/v1/updatePackage/:id", apiV1UpdatePackage);

app.post("/api/v1/addDeal", apiv1AddDeal);
app.get("/api/v1/getAllDeals", apiV1AllDeals);
app.get("/api/v1/getDeal/:id", apiV1GetDeal);
app.put("/api/v1/updateDeal/:id", apiV1UpdateDeal);

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
