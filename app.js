const express = require("express");

//configure server
const app = express();
const port = process.env.PORT || 3000;

//establish template engine (ejs)
app.set("view engine", "ejs");
//set ejs folders virtually in public
app.use(express.static(__dirname + "/public"));
//establish where views folders will be
app.set("views", __dirname + "/views");

//render pages
app.get("/", (req, res) => {
  res.render("index", {});
});

const services = [
  { serviceTitle: "Servicio1", serviceDesc: "Esto es el servicio 1" },
  { serviceTitle: "Servicio2", serviceDesc: "Esto es el servicio 2" },
  { serviceTitle: "Servicio3", serviceDesc: "Esto es el servicio 3" },
  { serviceTitle: "Servicio4", serviceDesc: "Esto es el servicio 4" },
  { serviceTitle: "Servicio5", serviceDesc: "Esto es el servicio 5" },
  { serviceTitle: "Servicio6", serviceDesc: "Esto es el servicio 6" },
];
app.get("/servicios", (req, res) => {
  res.render("servicios", { services });
});

app.get("/productos", (req, res) => {
  res.render("productos");
});

app.get("/quienesSomos", (req, res) => {
  res.render("quienesSomos");
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    titulo: "Contacto",
    texto: "Esto es como te puedes poner contacto con nosotros",
  });
});

app.listen(port, () => {
  console.log("Server escuchando");
});
