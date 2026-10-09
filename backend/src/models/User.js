const mongoose = require("mongoose");
const { validateEmail, validatePassword } = require("../utils/validatiors");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validateEmail,
      message: "Email invalido"
    }
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
    validate: {
      validator: validatePassword,
      message: "Senha invalida"
    }
  },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
