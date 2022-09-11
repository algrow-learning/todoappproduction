const mongoose = require("mongoose");

const todoitem = new mongoose.Schema({
  text: { type: String, required: true },
  priority: { type: String, default: "regular" },
  date: { type: String, default: "12/12/2050" },
  isCompleted: { type: Boolean, default: false },
});
const UserData = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  avtaar: { type: String, default: "avtaar-0" },
  todos: [todoitem],
});

// ---> user --> todoitems

const model = mongoose.model("UserData", UserData);

module.exports = model;
