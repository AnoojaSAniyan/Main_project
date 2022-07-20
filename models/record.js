const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Department = require("./department");
const Docter = require("./doctor");
const User = require("./user");

const recordSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  data: {
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    docter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docter",
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    bloodgroup: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    allergy: {
      type: String,
      required: true,
    },
    sugar: {
      type: String,
      required: true,
    },
    cholestrol: {
      type: String,
      required: true,
    },
    pressure: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  previousHash: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  nounce: {
    type: Number,
    required: true,
  },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
