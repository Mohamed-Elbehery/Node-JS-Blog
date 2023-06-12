//TODO to be able to use dotenv in the whole application
require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

//! Creating Public Static Folder
app.use(express.static("public"));

//! Templating Engine
app.use(expressLayout);
app.set("view engine", "ejs");
// rendering the views files in the main.ejs file according to the url request
app.set("layout", "./layouts/main");

//! Middlewares
app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`App Listening on Port ${PORT}`);
});
