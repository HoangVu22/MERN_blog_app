import express from "express";
import cors from "cors"; //express middleware
import mongoose from "mongoose";
import dotenv from "dotenv";
import post from "./routers/post.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const url = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/post", post);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
