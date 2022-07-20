const Record = require("../models/record");
const Responce = require("../models/responce");

const get_doc_home = async (req, res) => {
  const doc = await req.cookies.user;
  Record.find({ "data.docter": doc })
    .select("user data.heading data.description")
    .populate("user", "fname lname")
    .then((result) => {
      console.log(result);
      res.render("doc_home", { patData: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const post_doc_responce = async (req, res) => {
  const recid = await req.body.record;
  Record.findById({ _id: recid })
    .populate("user", "fname lname")
    .then((result) => {
      console.log(result);
      res.render("responce", { patData: result, errormessage: "" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const post_responce_save = async (req, res) => {
  const docter = await req.cookies.user;
  const { record, user, responce } = await req.body;
  Responce.create({ docter, record, user, responce })
    .then((result1) => {
      console.log(result1);
      Record.findById({ _id: record })
        .populate("user", "fname lname")
        .then((result) => {
          console.log(result);
          res.render("responce", { patData: result, errormessage: "Responce Added Sucessfully !!!" });
        })
        .catch((err) => {
          console.log(err);
          res.send(`**Some Error :::>>>> ${err}`)
        });
    })
    .catch((err1) => {
      console.log(err1);
      res.send(`**Some Error :::>>>> ${err1}`)
    });
};

module.exports = {
  get_doc_home,
  post_doc_responce,
  post_responce_save,
};
