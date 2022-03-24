const express = require("express");

const Batch = require("../models/batch.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Batch).post);

router.get("", crudController(Batch).getAll);

router.get("/:id", crudController(Batch).getOne);

router.patch("/:id", crudController(Batch).updateOne);

router.delete("/:id", crudController(Batch).deleteOne);

module.exports = router;
