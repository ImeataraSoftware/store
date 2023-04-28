const router = require('express').Router();

const {
  register,
  logIn,
  logInGoogle,
  logOut,
} = require('../controllers/authController.js');

router.post('/register', register);

router.post('/login', logIn);

router.get('/auth-google', logInGoogle);

router.post('/logout', logOut);

module.exports = router;
