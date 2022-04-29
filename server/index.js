import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postsRouter from "./routes/posts.js";
dotenv.config();

const app = express();
app.use("/posts", postsRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pu4qt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//mongoose connection
await mongoose.connect(DB_URL, options, (err) => {
  if (!err) {
    console.log("Database Conected...");
  } else {
    console.log("Error in DB connection : " + err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
