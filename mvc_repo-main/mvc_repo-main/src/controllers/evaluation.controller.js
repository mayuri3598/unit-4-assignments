const express = require("express");

const Evaluation = require("../models/evaluation.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Evaluation).post);

router.get("", crudController(Evaluation).getAll);

router.get("/:id", crudController(Evaluation).getOne);

router.patch("/:id", crudController(Evaluation).updateOne);

router.delete("/:id", crudController(Evaluation).deleteOne);

module.exports = router;
