const express = require("express");

const adminControllers = require("./../controllers/admin");

const router = express.Router();

router.post("/add-todo", adminControllers.addTodo);

module.exports = router;
