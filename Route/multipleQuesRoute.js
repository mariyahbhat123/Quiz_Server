const express = require("express");
const multipleQuesModel = require("../Models/multipleQuesSchema/multipleQuesSchema");
const router = express.Router();

router.post("/multipleQues", async (req, res) => {
  try {
    const { question, language } = req.body;
    console.log(req.body);
    await multipleQuesModel.create({
      language: language,
      question: question,
      options: {
        A: req.body.options.A,
        B: req.body.options.B,
        C: req.body.options.C,
        D: req.body.options.D,
      },
      answer: {
        A: req.body.answer.A,
        B: req.body.answer.B,
        C: req.body.answer.C,
      },
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/multiple/:langName", async (req, res) => {
  try {
    const langName = req.params.langName;
    const multipleLang = await multipleQuesModel.find({ language: langName });
    console.log(multipleLang);
    if (multipleLang) {
      return res.status(200).send({ data: multipleLang });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
