const router = require('express').Router()
const { adminProtect } = require('../middleware/auth');
const { getOrderById, updateOrderById, deleteOrderById  } = require('../controllers/order')

router.put("/:orderId", adminProtect, updateOrderById)
router.delete("/:orderId", adminProtect, deleteOrderById)
router.get("/:orderId", adminProtect, getOrderById)
router.get("/", adminProtect)
router.get("/income", adminProtect)

module.exports = router