const { Schema } = require("mongoose");

//? schema  validation ⤵
// new is required operator
const tractorSchema = new Schema({
  bigha: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  driverMoney: {
    type: Number,
    required: true,
  },
  expence: {
    type: String,
    required: true,
  },
  helperMoney: {
    type: Number,
    required: true,
  },
  helperName: {
    type: String,
    required: true,
  },
  oil: {
    type: String,
    required: true,
  },
  oilLiterPoient: {
    type: Number,
    required: true,
  },
  oileMoney: {
    type: String,
    required: true,
  },
  outstandingamount: {
    type: String,
    required: true,
  },
  totalExpense: {
    type: Number,
    required: true,
  },
  totalIncome: {
    type: Number,
    required: true,
  },
  totalAmountDeposited: {
    type: Number,
    required: true,
  },
});
//? schema validation ⤴

module.exports = tractorSchema;
