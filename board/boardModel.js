const db = require("../data/dbConfig");

module.exports = {
    getBoards,
    findById,
    addBoard,
    deleteBoard,
    editBoard

}


function findById(id) {//works on postman
    return db("articles")
      .where({ id })
      .first();
  }

  function getBoards(){
      return db("boards")
  }

  function addBoard(newBoard) {// works on postman
    return db("boards")
      .insert(newBoard)
      .then(ids => {
        return findById(ids[0]);
      });
  }

  function editBoard(board) {
      return db("boards")
  }

  function deleteBoard(board) {
      return db("boards")
      .where("id", id)
      .del(board)

  }