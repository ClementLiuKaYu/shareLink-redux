const express = require("express");
const { development } = require("./knexfile");

const knex = require("knex")(development);

module.exports = () => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const links = await knex("links").select();
    res.json(links);
  });

  router.post("/", async (req, res) => {
    await knex("links").insert({
      ...req.body,
      tags: JSON.stringify(req.body.tags),
    });
    res.end();
  });

  return router;
};
