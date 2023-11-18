import express from "express";
import { json } from "express";
import { PORT } from "./env.js";
import cors from "cors";

import jwt from "jsonwebtoken";
import { bookRouter } from "./routes/bookRouter.js";



import multer from "multer";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(cors());


const uploadDir = "./public/uploads";


if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});


const upload = multer({ storage: storage });

app.use(upload.single("image"));


app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App is running in PORT ${PORT}`);
});
