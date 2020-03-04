const db = require("../data/dbConfig");

module.exports = {
  getArticles,
  getCategory,
  deleteArticle,
  addArticle,
  findById,
  getUserArticles,
  updateArticle
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
  return db("articles").where("id", id);
}

function addArticle(newArticle) {
  return db("articles")
    .insert(newArticle)
    .returning("*");
  // .then(ids => {
  //   return findById(ids[0]);
  // });
}

function deleteArticle(id) {
  return db("articles")
    .where("id", id)
    .del();
}

function updateArticle(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes)
    .returning("*");
}
