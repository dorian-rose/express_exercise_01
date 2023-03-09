const { Schema, model } = require("mongoose");
const InstallationsSchema = new Schema({
  name: String,
  description: String,
  capacity: String,
  fecha: { type: Date, default: Date.now() },
});

module.exports = model("Installation", InstallationsSchema);
