const router = require("express").Router();
const { model } = require("mongoose");
const tractorSchema = require("../schema/tractorSchema");

//? model and schema validation ⤵
const Tractor = model("Tractor", tractorSchema);
//? model and schema validation ⤴

//? Tractor get router ⤵
router.get("/", async (req, res) => {
  try {
    const data = await Tractor.find({});
    res.status(200).send({ message: "Successfully Find", data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Tractor saved not successfully 🇷🇸" });
  }
});
//? Tractor get router ⤴

//? Tractor post router ⤵
router.post("/", async (req, res) => {
  const newTractor = new Tractor(req.body);
  try {
    await newTractor.save();
    res.status(200).send({ message: "Tractor saved successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Tractor saved not successfully 🇷🇸" });
  }
});
//? Tractor post router ⤴

module.exports = router;
