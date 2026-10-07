const usersRouter = require("./routes/Users");
const process = require("process");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
