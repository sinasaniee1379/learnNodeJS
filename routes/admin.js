const express = require("express");

const adminControllers = require("./../controllers/admin");

const router = express.Router();

router.post("/add-todo", adminControllers.addTodo);

router.get("/delete-todo/:id", adminControllers.deleteTodo);
router.get("/completed-todo/:id", adminControllers.completeTodo);

module.exports = router;
