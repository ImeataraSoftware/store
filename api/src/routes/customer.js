const router = require('express').Router();

const {} = require('../controllers/customerController.js');

router.get('/', async (req, res) => {
  res.send('Hello');
});

module.exports = router;
