
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "geno", password: "starroad", email: "geno@gmail.com"}
      ]);
    });
};
