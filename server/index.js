import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import {apiV1Signup, apiV1Login, apiV1Update, apiV1AllUsers, apiV1GetUser,apiV1GetInfluencerUsers} from "./controllers/user/user.js";
import {apiv1AddAccount,  apiV1AllAccounts, apiV1GetAccount, apiV1UpdateAccount} from "./controllers/account/account.js";
import {apiv1AddPackage, apiV1AllPackages, apiV1UpdatePackage,  apiV1GetPackage, apiV1GetPackageByUserId} from "./controllers/package/package.js";
import {apiv1AddDeal, apiV1AllDeals, apiV1GetDeal, apiV1UpdateDeal} from "./controllers/deal/deal.js";
import uploadCloudinary from './utils/cloudinary.js';
import fs from 'fs';
import multer from 'multer';

dotenv.config();
const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./public/temp";
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});


const upload = multer({ storage });
app.post('/upload', upload.single('file'), async (req, res) => {
  try {

    const localFilePath = req.file.path;
    const response = await uploadCloudinary(localFilePath);
    console.log(localFilePath);
    console.log(response);

    if (response) {
      res.status(200).json({ url: response.url });
    } else {
      res.status(500).json({ error: "Failed to upload file to Cloudinary" });
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/v1/signup", apiV1Signup);
app.post("/api/v1/login", apiV1Login);
app.put("/api/v1/update", apiV1Update);
app.get("/api/v1/getAllUsers", apiV1AllUsers);
app.get("/api/v1/getUser/:id", apiV1GetUser);
app.get("/api/v1/getInfluencerUsers", apiV1GetInfluencerUsers);

app.post("/api/v1/addAccount", apiv1AddAccount);
app.get("/api/v1/getAllAccounts", apiV1AllAccounts);
app.get("/api/v1/getAccount/:id", apiV1GetAccount);
app.put("/api/v1/updateAccount/:id", apiV1UpdateAccount);


app.post("/api/v1/addPackage", apiv1AddPackage);
app.get("/api/v1/getAllPackages", apiV1AllPackages);
app.get("/api/v1/getPackage/:id", apiV1GetPackage);
app.get("/api/v1/getPackageByUserId/:id", apiV1GetPackageByUserId);
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
