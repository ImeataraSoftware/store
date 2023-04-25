const router = require('express').Router();

const {
  getAllProduct,
  getProduct,
  createProduct,
} = require('../controllers/productController.js');

router.get('/', getAllProduct);

router.get('/:id', getProduct);

router.post('/', createProduct);

module.exports = router;
