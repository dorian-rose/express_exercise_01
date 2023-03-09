const Servicio = require("../models/servicioModel");
const Installation = require("../models/installationsModel");
const getIndex = (req, res) => {
  res.render("index", {
    titulo: "Home Page",
    texto: "Introduccion al sitio",
  });
};

const getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    console.log(servicios);
    res.render("servicios", {
      titulo: "Este es el servicio",
      servicios,
    });
  } catch (error) {
    console.log(error);
  }
};

const getInstallations = async (req, res) => {
  try {
    const installations = await Installation.find();
    console.log(installations);
    res.render("installations", {
      titulo: "Estos son nuestros installations",
      installations,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductos = (req, res) => {
  res.render("productos", {
    titulo: "Productos",
    texto: "Tenemos muchos productos",
  });
};

const getQuienesSomos = (req, res) => {
  res.render("quienesSomos", {
    titulo: "Somos",
    texto: "Somos los amos y llevamos tiempo siendo chingon",
  });
};

const getContacto = (req, res) => {
  res.render("contacto", {
    titulo: "Contacto",
    texto: "Esto es como te puedes poner contacto con nosotros",
  });
};

module.exports = {
  getIndex,
  getServicios,
  getProductos,
  getQuienesSomos,
  getContacto,
  getInstallations,
};
