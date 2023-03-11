const Servicio = require("../models/servicioModel");

const getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    return res.status(200).json({
      ok: true,
      msg: "Getting all services",
      data: servicios,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Error getting services",
    });
  }
};

//for testing: an id is: 640c923ce52ce1cb08d709ed

const getServicio = async (req, res) => {
  try {
    const id = req.params.id;
    const servicio = await Servicio.findById(id);
    console.log(servicio);
    return res.status(200).json({
      ok: true,
      msg: "Getting one service",
      data: servicio,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Error getting the service",
    });
  }
};

const createServicio = async (req, res) => {
  //const collection = await db.collection("servicios");
  //console.log(collection);
  const newServicio = new Servicio(req.body);
  try {
    const servicio = await newServicio.save();

    return res.status(201).json({
      ok: true,
      msg: "Creating otro service",
      data: servicio,
    });
  } catch (error) {
    return res.status(204).json({
      ok: false,
      msg: "Error creating the service",
    });
  }
};

const updateServicio = async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(req.params.id) };
  console.log(query);
  const toUpdate = await Servicio.findById(id);
  if (toUpdate) {
    try {
      const servicio = await toUpdate.findOneAndUpdate(id, req.body);
      console.log("hello from try");
      return res.status(201).json({
        ok: true,
        msg: "Updating one service",
        data: servicio,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error updating the service",
      });
    }
  } else
    return res.status(404).json({
      ok: false,
      msg: "Error finding this service",
    });
};

module.exports = {
  getServicios,
  getServicio,
  createServicio,
  updateServicio,
};
