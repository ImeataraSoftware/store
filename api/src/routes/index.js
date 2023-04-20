const router = require("express").Router();

const fs = require("fs");

const path = require("path");

const routerPath = path.join(__dirname, "/");

fs.readdirSync(routerPath)
  .filter((file) => {
    const fileName = path.basename(file, ".js");

    return fileName !== "index";
  })
  .forEach((file) => {
    const routerModule = require(path.join(routerPath, file));

    const routerName = path.basename(file, ".js");

    router.use(`/${routerName}`, routerModule);

    console.log("--->", routerName);
  });

module.exports = router;
