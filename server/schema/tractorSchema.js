const { Schema } = require("mongoose");

//? schema  validation ⤵
// new is required operator
const tractorSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
//? schema validation ⤴

module.exports = tractorSchema;
