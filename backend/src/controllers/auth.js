const User = require("../models/User");
const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { JWT_SECRET } = process.env;

function login(req, res, next) {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "JWT_SECRET", {
        expiresIn: "7d",
      });

      res.json({ token });
    })
    .catch(next);
}

function checkToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Autenticação necessária"));
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, "JWT_SECRET");
  } catch (err) {
    return next(new UnauthorizedError("Autenticação necessária"));
  }

  req.user = payload;

  next();
}

module.exports = { login, checkToken };
