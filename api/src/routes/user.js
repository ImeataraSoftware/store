const router = require("express").Router();

const {} = require("../controllers/userController.js");

router.get("/", async (req, res) => {
  res.send("Hello");
});

module.exports = router;
