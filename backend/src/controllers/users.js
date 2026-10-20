const bcrypt = require("bcrypt");
const User = require("../models/User");
const { checkToken } = require("./auth");
const { validateEmail, validatePassword } = require("../utils/validators");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  if (validateEmail(email) && validatePassword(password)) {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hash,
    });

    res.status(201).json({
      email: newUser.email,
      _id: newUser._id,
    });
  } else {
    res.status(400).send({
      message: "Dados inválidos",
    });
  }
}

async function getCurrentUser(req, res, next) {
  try {
    const { _id } = req.user;

    const user = await User.findById(_id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { createUser, getCurrentUser };
