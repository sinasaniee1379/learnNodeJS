const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const { setStatics } = require("./utils/statics");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
// End of Middlewares

// EJS
app.set("view engine", "ejs");
app.set("views", "views");
// End of EJS

// Statics
setStatics(app);
//End of Statics

// Routes
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "کار های روزمره" });
});
// End of Routes

app.listen(3000, () => console.log("Server is running."));
