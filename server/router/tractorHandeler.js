const router = require("express").Router();
const { model } = require("mongoose");
const tractorSchema = require("../schema/tractorSchema");

//? model and schema validation ⤵
const Tractor = model("Tractor", tractorSchema);
//? model and schema validation ⤴

//? Tractor all get router ⤵
router.get("/", async (req, res) => {
  try {
    const data = await Tractor.find({}).select("date");
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

//? Tractor Delete router ⤵
router.delete("/:id", async (req, res) => {
  try {
    const deleteRes = await Tractor.deleteOne({ _id: req.params.id });
    res.send({
      message: "Tractor Delete successfully",
      status: true,
      statusCode: 200,
      data: deleteRes,
    });
  } catch (err) {
    console.error(err.message);
    res.send({
      message: "Tractor Delete not successfully",
      status: false,
      statusCode: 500,
    });
  }
});
//? Tractor Delete router ⤴

//? Tractor Update router ⤵
router.put("/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const updateRes = await Tractor.replaceOne(filter, req.body);
    res.send({
      message: "Tractor Update successfully",
      status: true,
      statusCode: 200,
      data: updateRes,
    });
  } catch (err) {
    console.error(err.message);
    res.send({
      message: "Tractor Update not successfully",
      status: false,
      statusCode: 500,
    });
  }
});
//? Tractor Update router ⤴

module.exports = router;
