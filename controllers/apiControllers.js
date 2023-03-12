const Servicio = require("../models/servicioModel");

//function to get all services
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

//function to get one service using ID
const getServicio = async (req, res) => {
  try {
    const id = req.params.id;
    const servicio = await Servicio.findById(id);

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

//function to create new service
const createServicio = async (req, res) => {
  try {
    const NewServicio = new Servicio(req.body);
    console.log(NewServicio);
    const newServicioData = await NewServicio.save();
    return res.status(201).json({
      ok: true,
      msg: "Creating otro service",
      data: newServicioData,
    });
  } catch (error) {
    return res.status(500).json({
      //204??
      ok: false,
      msg: "Error creating the service",
    });
  }
};

//function to update a service
const updateServicio = async (req, res) => {
  try {
    console.log(req.body);
    const newBody = req.body;
    const id = req.params.id;
    //const updatedServicio = await Servicio.findByIdAndUpdate(id, newBody);
    const updatedServicio = await Servicio.findOneAndUpdate(
      { _id: id },
      { $set: newBody },
      { new: true }
    );
    return res.status(201).json({
      //200 o 201??
      ok: true,
      msg: "Updating one service",
      data: updatedServicio,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error updating the service",
    });
  }
  //   } else
  //     return res.status(404).json({
  //       ok: false,
  //       msg: "Error finding this service",
  //     });
};

//function to delete service
const deleteServicio = async (req, res) => {
  const id = req.params.id;
  try {
    servicios = await Servicio.findOneAndDelete(id);
    //const servicios = await Servicio.find();
    return res.status(200).json({
      ok: true,
      msg: "deleting this service",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error error deleting service",
    });
  }
};

module.exports = {
  getServicios,
  getServicio,
  createServicio,
  updateServicio,
  deleteServicio,
};
