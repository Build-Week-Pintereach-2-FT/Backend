
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "mario", password: "mushroom", email: "mario@gmail.com"},
        {username: "luigi", password: "mansion", email: "luigi@gmail.com"},
        {username: "peach", password: "toadstool", email: "peach@gmail.com"},
        {username: "yoshi", password: "eggs", email: "yoshi@gmail.com"},
        {username: "bowser", password: "castle", email: "princessthief@gmail.com"},
      ]);
    });
};
