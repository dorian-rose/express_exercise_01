const mongoose = require("mongoose");

const conexion = async () => {
  try {
    const respuesta = await mongoose.connect(process.env.URI_CONNECT);
    console.log("conectado");
    return respuesta;
  } catch (error) {
    return { ok: false, msg: "error con la conexion", error };
  }
};

module.exports = { conexion };
