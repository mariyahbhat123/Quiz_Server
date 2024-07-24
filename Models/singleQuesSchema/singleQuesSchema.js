const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const singleQuesSchema = new Schema(
  {
    language: String,
    question: String,
    answer: String,
    options: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    date: { type: Date, default: Date.now },
  },
  { collection: "singleQuesCollection" }
);

const singleQuesModel = model("singleQuesModel", singleQuesSchema);
module.exports = singleQuesModel;
