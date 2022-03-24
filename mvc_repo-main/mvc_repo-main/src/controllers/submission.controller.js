const express = require("express");

const Submission = require("../models/submission.modal");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Submission).post);

router.get("", crudController(Submission).getAll);

router.get("/:id", crudController(Submission).getOne);

router.patch("/:id", crudController(Submission).updateOne);

router.delete("/:id", crudController(Submission).deleteOne);

module.exports = router;
