exports.up = function (knex) {
  return knex.schema.createTable("links", (table) => {
    table.increments();
    table.string("name");
    table.string("url");
    table.json("tags");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("links");
};
