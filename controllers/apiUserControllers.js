const User = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({
        ok: true,
        msg: "User retrieved",
        data: user,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "User with this ID doesn't exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error retrieving user, contact administrator",
    });
  }
};

const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const userData = await newUser.save();
    console.log("hello from try");
    return res.status(201).json({
      ok: true,
      msg: "New user created",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error creating new user, contact administrator",
    });
  }
};

module.exports = { getUser, createUser };
