const router = require("express").Router();

const {} = require("../controllers/categoryController.js");

router.get("/", async (req, res) => {
  res.send("Hello");
});

module.exports = router;
