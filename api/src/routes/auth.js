const router = require('express').Router();

const {
  authGoogle,
  register,
  login,
} = require('../controllers/authController.js');

router.post('/auth-google', authGoogle);

router.post('/register', register);

router.post('/login', login);

module.exports = router;