
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
      
        {
          articleName: "Dreams revolution",
          linkToArticle: "https://www.gamerevolution.com/game/dreams#/slide/1",
          categories: "Video Games",
          datePublished: "2020-27-2",
          userId: 1
        },
        {
          articleName: "Mass Effect Andromeda sucks",
          linkToArticle: "https://medium.com/@jaredleejohnson/bioware-cant-patch-what-sucks-about-mass-effect-andromeda-95192dc9bea4",
          categories: "Video Games",
          datePublished: "2020-03-02",
          userId: 1
        },
        {
          articleName: "Ketogenic egg sammies",
          linkToArticle: "https://www.carbmanager.com/recipe/keto-hard-boiled-egg-breakfast-bites",
          categories: "Cooking",
          datePublished: "2020-03-02",
          userId: 3
        },
        {
          articleName: "haunted house of ",
          linkToArticle: "https://georgiastatesignal.com/six-atlantas-scariest-haunted-houses/",
          categories: "Attractions",
          datePublished: "2020-03-02",
          userId: 2
        },
        {
          articleName: "Gatorland in flames",
          linkToArticle: "https://www.nytimes.com/2006/11/07/us/07gator.html",
          categories: "News",
          datePublished: "2006-11-07",
          userId: 4
        },
        {
          articleName: "kidnaping definition ",
          linkToArticle: "https://www.dictionary.com/browse/kidnaping",
          categories: "Misc",
          datePublished: "2020-03-02",
          userId: 5
        },
      ]);
    });
};
