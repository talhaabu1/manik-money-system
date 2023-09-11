const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const tractorHandeler = require("./router/tractorHandeler");
const Port = process.env.PORT || 8080;

//? call express.json.dotenv.cors middleware ⤵
dotenv.config();
app.use(express.json());
app.use(cors());
//? call express.json.dotenv.cors middleware ⤴

//? connect  server ⤵
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection SuccessFull"))
  .catch((err) => console.log(err));
//? connect  server ⤴

//? all routurs use call ⤵
app.use("/tractor", tractorHandeler);
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
