const express = require('express')
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require('../../controllers/orderController')
const { userAuthentication } = require('../../middlewares/userAuth')
const { adminAuthentication } = require('../../middlewares/adminAuth')
const router = express.Router()

// create order
router.post('/order',userAuthentication, createOrder)
// get order
router.get('/orders',userAuthentication, getOrders)
// get order by id
router.get('/order/:id',userAuthentication, getOrderById)
// update order
router.put('/order/:id/status',adminAuthentication,  updateOrderStatus)

module.exports = {orderRouter: router}