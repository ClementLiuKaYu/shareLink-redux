exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("links")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("links").insert([
        {
          id: 1,
          name: "Google",
          url: "https://www.google.com",
          tags: JSON.stringify(["search engine", "Yahoo"]),
        },
      ]);
    });
};
