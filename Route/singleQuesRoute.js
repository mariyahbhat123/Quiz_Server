const express = require("express");
const singleQuesModel = require("../Models/singleQuesSchema/singleQuesSchema");
const router = express.Router();

router.post("/singleQues", async (req, res) => {
  try {
    console.log(req.body.options.A);
    const { answer, question, language } = req.body;
    await singleQuesModel.create({
      language: language,
      answer: answer,
      question: question,
      options: {
        A: req.body.options.A,
        B: req.body.options.B,
        C: req.body.options.C,
        D: req.body.options.D,
      },
    });
  } catch (error) {
    // console.error(error);
    console.log("error");
  }
});

router.post("/single/:langName", async (req, res) => {
  try {
    const langName = req.params.langName;
    const singleLang = await singleQuesModel.find({ language: langName });
    if (singleLang) {
      return res.status(200).send({ data: singleLang });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
