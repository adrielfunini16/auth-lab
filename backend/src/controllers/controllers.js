const User = require("../models/User");
const { validateEmail, validatePassword } = require("../utils/validators");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  if (validateEmail(email) && validatePassword(password)) {
    const newUser = await User.create({ name, email, password });
    res.status(201).send(newUser);
  } else {
    res.status(400).send({
      message: "Dados inválido",
    });
  }
}

module.exports = createUser;
