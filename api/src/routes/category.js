const router = require('express').Router();

const {
  getAllCategory,
  getCategory,
  createCategory,
} = require('../controllers/categoryController.js');

router.get('/', getAllCategory);

router.get('/:id', getCategory);

router.post('/', createCategory);

module.exports = router;
