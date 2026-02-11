const express = require("express");

const todosControllers = require("./../controllers/todos");

const router = express.Router();

router.get("/", todosControllers.getIndex);

module.exports = router;
