const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { validateEmail, validatePassword } = require("../utils/validators");
const UnauthorizedError = require("../errors/UnauthorizedError");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validateEmail,
      message: "Email invalido",
    },
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
    select: false,
    validate: {
      validator: validatePassword,
      message: "Senha invalida",
    },
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password,
) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return Promise.reject(
          new UnauthorizedError("Email ou senha incorretos"),
        );
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(
            new UnauthorizedError("Email ou senha incorretos"),
          );
        }

        return user;
      });
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
