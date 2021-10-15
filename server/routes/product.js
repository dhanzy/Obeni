const router = require('express').Router()
const { adminProtect } = require('../middleware/auth')
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProductById } = require('../controllers/product')

router.get('/', getAllProducts);
router.post('/', adminProtect, createProduct )
router.get('/:productId', getProductById)
router.put('/:productId', adminProtect, updateProduct )
router.delete('/:productId', adminProtect, deleteProductById)


module.exports = router;