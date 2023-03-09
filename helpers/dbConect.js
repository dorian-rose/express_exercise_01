const mongoose = require("mongoose");

const conexion = async () => {
  const user = "admin";
  const pass = "admin";
  const dbname = "projecto1";
  const uri = `mongodb+srv://${user}:${pass}@cluster0.dpyy6cg.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  try {
    const respuesta = await mongoose.connect(uri);

    console.log("conectado");
    return respuesta;
  } catch (error) {
    return { ok: false, msg: "error con la conexion", error };
  }
};

module.exports = { conexion };
