const express = require("express");

const app = express();

const path = require("path");

const engines = require("express-handlebars");

const bodyParser = require("body-parser");

app.engine(
    "ejs",
    engines({
      layoutsDir: "./FE/Views",
      defaultLayout: "",
      extname: "ejs",
    })
  );
  
app.set("views", "./FE/Views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const routes = require(path.join(__dirname, "/BE/Routes", "routes"));
app.use("/",routes);

// const getErrorPage = require(path.join(__dirname,"/BE/Controller","error"));
// app.use(getErrorPage);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running ar port 3000");
});
