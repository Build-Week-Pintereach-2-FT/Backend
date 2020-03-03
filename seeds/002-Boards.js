
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {boardName: "enviroment", boardDescription: "enviromental research", userId: 1},
       
       
      ]);
    });
};
