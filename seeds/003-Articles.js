
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {
          articleName: "google about it",
          linkToArticle: "www.google.com",
          categories: "search",
          datePublished: "",
          boardId: 1
        },

      ]);
    });
};
