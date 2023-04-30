const router = require('express').Router();

const {
  register,
  registerGoogle,
  logIn,
  logInGoogle,
  logOut,
} = require('../controllers/authController.js');

router.post('/register', register);

router.get('/register-google', registerGoogle);

router.post('/login', logIn);

router.get('/login-google', logInGoogle);

router.post('/logout', logOut);

module.exports = router;
