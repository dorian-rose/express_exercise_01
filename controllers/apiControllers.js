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
    return res.status(500).json({
      ok: false,
      msg: "Error getting services",
    });
  }
};

//function to get one service using ID
const getServicio = async (req, res) => {
  try {
    const id = req.params.id;
    const servicio = await Servicio.findById(id);
    if (servicio) {
      return res.status(200).json({
        ok: true,
        msg: "Getting one service",
        data: servicio,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "Service with this ID doesn't exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error getting the service",
    });
  }
};

//function to create new service
const createServicio = async (req, res) => {
  const NewServicio = new Servicio(req.body);
  try {
    const newServicioData = await NewServicio.save();
    return res.status(201).json({
      ok: true,
      msg: "Creating otro service",
      data: newServicioData,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error creating the service",
    });
  }
};

//function to update a service
const updateServicio = async (req, res) => {
  try {
    const newBody = req.body;
    const id = req.params.id;
    const updatedServicio = await Servicio.findOneAndUpdate(
      { _id: id },
      { $set: newBody },
      { new: true } // to show the new data
    );
    // if (updateServicio) {
    return res.status(201).json({
      ok: true,
      msg: "Updating one service",
      data: updatedServicio,
    });
    //} else {
    // return res.status(404).json({
    //   ok: false,
    //   msg: "Service with this ID doesn't exist",
    // });
    // }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error updating the service",
    });
  }
};

//function to delete service
const deleteServicio = async (req, res) => {
  const id = req.params.id;
  try {
    await Servicio.findOneAndDelete(id);
    //find by id - if exists, remove, if doesn't exist, error
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
