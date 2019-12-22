var express = require('express')
var router = express.Router()

const OrderController = require('../../controller/order.controller')

router.get('/', OrderController.getOrders)
router.get('/order_id/:order_id', OrderController.getOrder)
router.post('/', OrderController.createOrder)
router.put('/order_id/:order_id', OrderController.updateOrder)

module.exports = router