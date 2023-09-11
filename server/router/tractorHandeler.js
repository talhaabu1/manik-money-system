const router = require("express").Router();
const { model } = require("mongoose");
const tractorSchema = require("../schema/tractorSchema");

//? model and schema validation ⤵
const Tractor = model("Tractor", tractorSchema);
//? model and schema validation ⤴

//? Tractor all get router ⤵
router.get("/", async (req, res) => {
  try {
    const data = await Tractor.find({});
    res.send({
      message: "Successfully Find",
      data: data.reverse(),
      status: true,
      statusCode: 200,
    });
  } catch (err) {
    console.error(err.message);
    res.send({
      message: "successfully Not Find",
      status: false,
      statusCode: 500,
    });
  }
});
//? Tractor all get router ⤴

//? Tractor  get by id router ⤵
router.get("/:id", async (req, res) => {
  try {
    const data = await Tractor.findOne({ _id: req.params.id });
    res.send({
      message: "Successfully Find",
      data,
      status: true,
      statusCode: 200,
    });
  } catch (err) {
    console.error(err.message);
    res.send({
      message: "successfully Not Find",
      status: false,
      statusCode: 500,
    });
  }
});
//? Tractor get by id router ⤴

//? Tractor post router ⤵
router.post("/", async (req, res) => {
  const newTractor = new Tractor(req.body);
  try {
    await newTractor.save();
    res.send({
      message: "Tractor saved successfully",
      status: true,
      statusCode: 200,
    });
  } catch (err) {
    console.error(err.message);
    res.send({
      message: "Tractor saved not successfully",
      status: false,
      statusCode: 500,
    });
  }
});
//? Tractor post router ⤴

module.exports = router;
