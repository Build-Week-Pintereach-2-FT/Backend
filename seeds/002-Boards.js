
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {boardName: "Gaming", boardDescription: "Gaming stuff", userId: 1},
        {boardName: "Cooking", boardDescription: "Cooking stuff", userId: 3},
        {boardName: "Research", boardDescription: "Research stuff", userId: 5},
        {boardName: "News", boardDescription: "Not fake news stuff", userId: 4},
        {boardName: "Attractions", boardDescription: "Attraction stuff", userId: 2},
       
      ]);
    });
};
