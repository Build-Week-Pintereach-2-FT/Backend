exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .text("username", 30)
        .unique()
        .notNullable();
      tbl.text("password", 30).notNullable();
      tbl.text("email", 50).notNullable();
    })

    .createTable("boards", tbl => {
      tbl.increments();
      tbl
        .string("boardName")
        .notNullable()
        .unique();
        tbl.string("boardDescription")
      tbl
        .integer("userId")
        .notNullable()
        .references("users.id");
    })
    .createTable("articles", tbl => {
      tbl.increments();
      tbl.string("articleName").notNullable();
      tbl.text("linkToArticle").notNullable();
      tbl.string("categories").notNullable();
      tbl.string("datePublished").notNullable();
      tbl
        .integer("boardId")
        .notNullable()
        .references("boards.id");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("articles")
    .dropTableIfExists("boards")
    .dropTableIfExists("Users");
};
