const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;
const app = express();
const uri = "mongodb://0.0.0.0:27017/";
const singleQuesRoute = require("../Route/singleQuesRoute");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
    // "http://localhost:3000",
    // "http://localhost:3006"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = () => {
  try {
    mongoose.connect(uri, { dbName: "quiz-mern" });
    console.log("CONNECTED");
  } catch (error) {
    console.error(error);
  }
};

app.use("/api", require("../Route/singleQuesRoute"));
app.use("/api", require("../Route/multipleQuesRoute"));
app.use("/api", require("../Route/checkAnswersRoute"));

app.listen(PORT, () => {
  db((err) => {
    if (err) console.log(err);
  });
  console.log("Listening to Port", PORT);
});
