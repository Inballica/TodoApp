const express = require("express");
const Todo = require("../Model/Todo");
const router = express.Router();
router.get("/", async (req, res) => {
  let list;
  try {
    list = await Todo.find({});
    res.status(200).json(list);
  } catch (error) {
    return res.status(500).send("Server error");
  }
});

router.post("/add", async (req, res) => {
  const { todo, completed } = req.body;
  let list;
  try {
    list = new Todo({
      todo,
      completed,
    });
    await list.save();
    res.status(200).json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
router.delete("/delete/:id", async (req, res) => {
  let list;
  try {
    list = await Todo.findById(req.params.id);
    await list.remove();
    res.status(200).json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
router.delete("/deletecompleted", async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.status(200).json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
router.patch("/completed/:id", async (req, res) => {
  let list;
  try {
    console.log(req.body);
    list = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { completed: req.body.updateValue },
      { new: true }
    );
    await list.save();
    res.status(200).json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
router.post("/allcomplete", async (req, res) => {
  try {
    await Todo.updateMany({}, { completed: true });
    res.status(200).json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
router.post("/updatetodo/:id", async (req, res) => {
  let list;
  try {
    console.log(req.body);
    list = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { todo: req.body.updateValue },
      { new: true }
    );
    await list.save();
    res.status(200).json(list);
  } catch (error) {
    return res.status(500).send("Server error");
  }
});
module.exports = router;
