require("dotenv").config();
const errorHandle = require("./middlewares/errorHandler");
const { errors } = require("celebrate");
const usersRouter = require("./routes/Users");
const process = require("process");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));
const { PORT = 3000 } = process.env;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/", usersRouter);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
