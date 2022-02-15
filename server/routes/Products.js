const express = require("express");
const router = express.Router();
const { Products } = require("../models");

router.get("/", async (req, res) => {
  const listProducts = await Products.findAll();
  res.json(listProducts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Products.findByPk(id);
  res.json(product);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Products.create(post);
  res.json(post);
});

module.exports = router;
