const express = require("express");
const { conexion } = require("./helpers/dbConect");
//configure server
const app = express();
const port = process.env.PORT || 3000;

//set ejs folders virtually in public
app.use(express.static(__dirname + "/public"));

//establish template engine (ejs)
app.set("view engine", "ejs");

//establish where views folders will be
app.set("views", __dirname + "/views");
//conect
conexion();
///import routers
app.use("/", require("./routers/routerFront"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    texto: "La pagina no se encuentra",
  });
});

app.listen(port, () => {
  console.log("Server escuchando");
});
