const User = require("../models/User");

async function createUser(req, res) {
  const { name, email, age } = req.body;
  const validationEmail = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
  if (validationEmail.test(email)) {
    const newUser = await User.create({ name, email, age });
    res.status(201).send(newUser);
  } else {
    res.status(400).send({
      message: "Email inválido",
    });
  }
}

module.exports = createUser;
