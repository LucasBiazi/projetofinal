const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const server = express();

mongoose.connect('mongodb://localhost:27017/cestabasica', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3336);