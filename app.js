const express = require('express')
const path =  require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoConnection = require("./models/connection")

const routes = require('./routes')

const app =express()

mongoConnection('mongodb://localhost:27017/medChain', app);
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/",routes)

