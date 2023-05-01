const router = require('express').Router();

const {
  logUp,
  logupGoogle,
  logIn,
  logInGoogle,
} = require('../controllers/authController.js');

router.post('/logup', logUp);

router.get('/logup-google', logupGoogle);

router.post('/login', logIn);

router.get('/login-google', logInGoogle);

module.exports = router;
