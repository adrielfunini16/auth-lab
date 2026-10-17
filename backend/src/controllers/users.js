const bcrypt = require("bcrypt");
const User = require("../models/User");
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

function login(req, res) {
  const { email, password } = req.body;

  if (validateEmail(email) && validatePassword(password)) {
    return User.findUserByCredentials(email, password)
      .then((token) => {
        res.send(token);
      })
      .catch((err) => {
        res.status(401).send({ message: err.message });
      });
  }

  return res.status(400).send({ message: "Formato dos dados incorretos" });
}

module.exports = { createUser, login };
