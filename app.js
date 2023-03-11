//import express
const express = require("express");
//const bodyParser = require("body-parser");

//dotenv module
require("dotenv").config(); //before port

//configure server
const app = express();
const port = process.env.PORT || 3000;

//connect with mongodb
const { conexion } = require("./helpers/dbConect");

//const { searchBooking } = require("./scraping");
//* cors model to access env
const cors = require("cors");
app.use(cors());
//set ejs folders virtually in public
app.use(express.static(__dirname + "/public"));

//establish template engine (ejs)
app.set("view engine", "ejs");
//establish where views folders will be
app.set("views", __dirname + "/views");

///import routers
app.use("/", require("./routers/routerFront"));

app.use("/api", require("./routers/routerApi"));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    texto: "La pagina no se encuentra",
  });
});

//conect -callfunction that connects to db
conexion();

//port listening
app.listen(port, () => {
  console.log("Server escuchando", port);
});
