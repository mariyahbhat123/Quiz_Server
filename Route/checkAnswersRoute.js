const express = require("express");
const router = express.Router();
const singleQuesModel = require("../Models/singleQuesSchema/singleQuesSchema");
const multipleQuesModel = require("../Models/multipleQuesSchema/multipleQuesSchema");

router.post("/checkAnswers", async (req, res) => {
  try {
    const { ans1, ans2, ans3, ans4 } = req.body;
    console.log(ans1, ans2, ans3, ans4);
    const answers = await singleQuesModel.find({}).select("answer");
    var data = [];

    answers.map((item) => {
      if (item.answer === ans1) {
        data = [...data, 1];
        console.log("ans1");
      } else if (item.answer === ans2) {
        data = [...data, 1];
        console.log("ans2");
      } else if (item.answer === ans3) {
        data = [...data, 1];
        console.log("ans3");
      } else if (item.answer === ans4) {
        console.log("ans4");
        data = [...data, 1];
      } else if (
        item.answer !== ans1 ||
        item.answer !== ans2 ||
        item.answer !== ans3 ||
        item.answer !== ans4
      ) {
        data = [...data];
      }
    });

    console.log(data);
    return res.send({ data });
  } catch (err) {
    console.error(err);
  }
});

router.post("/checkMultiAnswers", async (req, res) => {
  try {
    const quiz0 = req.body.quiz0;
    const quiz1 = req.body.quiz1;
    const quiz2 = req.body.quiz2;
    const quiz3 = req.body.quiz3;
    console.log(quiz0);

    const answers = await multipleQuesModel.find({}).select("answer");
    console.log(answers);
    var data = [];

    answers.map((item, id) => {
      if (id === 0) {
        if (
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz0.ans1) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz0.ans2) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz0.ans3)
        ) {
          data = [...data, 1];
          console.log("ans1");
          console.log(id);
        } else {
          console.log(quiz0.ans1);
          data = [...data, 0];
        }
      } else if (id === 1) {
        if (
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz1.ans1) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz1.ans2) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz1.ans3)
        ) {
          data = [...data, 1];
          console.log("ans2");
        } else {
          data = [...data, 0];
        }
      } else if (id === 2) {
        if (
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz2.ans1) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz2.ans2) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz2.ans3)
        ) {
          data = [...data, 1];
          console.log("ans3");
        } else {
          data = [...data, 0];
        }
      } else if (id === 3) {
        if (
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz3.ans1) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz3.ans2) &&
          [item.answer.A, item.answer.B, item.answer.C].includes(quiz3.ans3)
        ) {
          console.log("ans4", item.answer.A);
          data = [...data, 1];
        } else {
          data = [...data, 0];
        }
      }
    });

    console.log(data);
    return res.send({ data });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
