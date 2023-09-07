const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tractor = require("./router/tractorRouter");
const app = express();
const Port = process.env.PORT || 8080;

//? call express.json.dotenv middleware ⤵
dotenv.config();
app.use(express.json());
//? call express.json middleware ⤴

//? connect local server ⤵
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection SuccessFull"))
  .catch((err) => console.log(err));
//? connect local server ⤴

//? all routurs use call ⤵
app.use("/tractor", tractor);
//? all routurs use call ⤴

//? not validate router error handaler ⤵
app.use((req, res, next) => {
  res.status(404).send("Requset url not found ! 📙");
});
//? not validate router error handaler ⤴

//? server running port function ⤵
app.listen(Port, () => {
  console.log(`server listening on port ${Port}`);
});
//? server running port function ⤴
