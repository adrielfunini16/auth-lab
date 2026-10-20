const router = require("express").Router();
const User = require("../models/User");
const { createUser, getCurrentUser } = require("../controllers/users");
const { login, checkToken } = require("../controllers/auth");
const { celebrate, Joi } = require("celebrate");

router.get("/users/me", checkToken, getCurrentUser);

router.post("/users", createUser);
router.post(
  "/signin",
  celebrate({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .orFail(() => {
      const err = new Error("Usuário não encontrado");
      err.statusCode = 404;
      throw err;
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({
          message: "ID de usuário invalido",
        });
      }

      return res.status(err.statusCode || 500).send({
        message: err.message,
      });
    });
});

router.patch("/users/:id", (req, res) => {
  const { name, email, age } = req.body;

  User.findByIdAndUpdate(
    req.params.id,
    { name, email, age },
    { new: true, runValidators: true },
  )
    .then((updateUser) => {
      if (!updateUser) {
        return res.status(404).send({
          message: "Usuário não encontrado!",
        });
      }

      return res.status(200).send(updateUser);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Erro ao atualizar usuário",
        error: err.message,
      });
    });
});

module.exports = router;
