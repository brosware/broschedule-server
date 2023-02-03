import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(`${process.env.MONGO_URL}`, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log("Failed connection to database", error);
  } else {
    // eslint-disable-next-line no-console
    console.log("Connected to database");
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server ready on port ${port}`);
    });
  }
});