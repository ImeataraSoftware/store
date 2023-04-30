const router = require('express').Router();

const {
  logUp,
  logupGoogle,
  logIn,
  logInGoogle,
  logOut,
} = require('../controllers/authController.js');

router.post('/logup', logUp);

router.get('/logup-google', logupGoogle);

router.post('/login', logIn);

router.get('/login-google', logInGoogle);

router.post('/logout', logOut);

module.exports = router;
