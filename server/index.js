import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postsRouter from "./routes/posts.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const DB_URL_REMOTE = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pu4qt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const DB_URL_LOCAL = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

const PORT = process.env.PORT || 5001;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Post Sharer API");
});
//mongoose connection
await mongoose.connect(DB_URL_REMOTE, options, (err) => {
  if (!err) {
    console.log("Database Conected...");
  } else {
    console.log("Error in DB connection : " + err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
