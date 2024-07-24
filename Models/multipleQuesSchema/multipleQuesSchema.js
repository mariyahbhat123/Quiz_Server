const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const multipleQuesSchema = new Schema(
  {
    language: String,
    question: String,
    answer: {
      A: { type: String, required: true },
      B: { type: String, required: true },
      C: { type: String, required: false },
    },
    options: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    date: { type: Date, default: Date.now },
  },
  { collection: "multipleQuesCollection" }
);

const multipleQuesModel = model("multipleQuesModel", multipleQuesSchema);
module.exports = multipleQuesModel;
