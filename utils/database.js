const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/todo_db", {})
  .then(() => {
    console.log("connected to Data Base");
  })
  .catch((error) => console.log(error));
