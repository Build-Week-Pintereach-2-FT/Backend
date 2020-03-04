const db = require("../data/dbConfig");

module.exports = {
  getBoards,
  findById,
  addBoard,
  deleteBoard,
  editBoard,
  getUsersBoards
};

function findById(id) {
  //works on postman
  return db("boards")
    .where("userId", id)
    .first();
}

function getBoards() {
  return db("boards");
}

function getUsersBoards(id) {
    return db("boards")
    .where("userId", id)
}

function addBoard(newBoard) {
  return db("boards")
    .insert(newBoard)
    .then(ids => {
      return findById(ids[0]);
    });
}

function editBoard(board) {
  return db("boards");
}

function deleteBoard(id) {
  return db("boards")
    .where("id", id)
    .del(id);
}
