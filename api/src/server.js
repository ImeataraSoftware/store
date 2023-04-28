require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const router = require("./routes/index.js");

const { sequelize } = require("./database.js");

const server = express();

const port = 3001;

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());

server.use(cors());

server.use("/", router);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Synchronized tables");
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error synchronizing models: ${err.message}`);
  });
