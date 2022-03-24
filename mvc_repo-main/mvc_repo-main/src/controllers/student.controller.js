const express = require("express");

const Student = require("../models/student.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Student).post);

router.get("", crudController(Student).getAll);

router.get("/:id", crudController(Student).getOne);

router.patch("/:id", crudController(Student).updateOne);

router.delete("/:id", crudController(Student).deleteOne);

module.exports = router;
