const todoModel = require("./model");

//function for get route
function gettodo(req, res) {
  async function getFromDb() {
    let alldata = await todoModel.find({});
    console.log(alldata);
    res.json({ alldata });
  }
  getFromDb();
}
//function to handle post route
function posttodo(req, res) {
  let name = req.body.name;
  async function saveToDb() {
    let todo = new todoModel({ name: name });
    let result = await todo.save();
    res.json(result);
  }
  saveToDb();
}
//function to update from db
function updatetoto(req, res) {
  let id = req.params.id;
  let updatedValue = req.body.name;
  console.log(updatedValue);
  async function updateFromDb() {
    let result = await todoModel.findByIdAndUpdate(id, { name: updatedValue });
    console.log(result);
    res.json({ result });
  }
  updateFromDb();
}
//function to delete from db
function deletetodo(req, res) {
  let id = req.params.id;
  async function deleteFromDb() {
    let result = await todoModel.findOneAndDelete({ _id: id });
    res.json({ result });
  }
  deleteFromDb();
}
module.exports = { gettodo, posttodo, updatetoto, deletetodo };
