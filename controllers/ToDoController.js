const TODOModel = require("../models/ToDoModal");

exports.getToDo = async (req, res) => {
  try {
    const todo = await TODOModel.find(); // [] [{},{}]
    res.send(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.saveToDo = async (req, res) => {
  try {
    const text = req.body.text;
    await TODOModel.create({ text });
    res.set(201).send("Todo Added Successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    // _id
    const { _id } = req.body;

    await TODOModel.findByIdAndDelete(_id);
    res.set(200).send("Deleted Successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;

    await TODOModel.findByIdAndUpdate(_id, { text });

    res.set(200).send("Updated successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
