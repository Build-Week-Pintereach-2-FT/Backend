const db = require("../data/dbConfig");

module.exports = {
  getArticles,
  getCategory,
  deleteArticle,
  addArticle,
  findById,
  getUserArticles
  //getArticlesByCategory,
};

function getArticles() {
  return db("articles");
}

function getUserArticles(id) {
  return db("articles")
    .where("boardId", id)
    .first();
}

function getCategory() {
  //works on postman
  return db("articles").select("categories");
}

function findById(id) {
  //works on postman
  return db("articles")
    .where("boardId", id)
}

function addArticle(newArticle) {
  // works on postman
  return db("articles")
    .insert(newArticle)
    .then(ids => {
      return findById(ids[0]);
    });
}

function deleteArticle(id) {
  return db("articles")
    .where("id", id)
    .del();
}
