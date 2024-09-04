const express = require('express')
const { createOrder, getOrders } = require('../../controllers/orderController')
const { userAuthentication } = require('../../middlewares/userAuth')
const router = express.Router()

// create order
router.post('/order',userAuthentication, createOrder)
// get order
router.get('/orders',userAuthentication, getOrders)
// get order by id
router.get('/order/:id', )
// update order
router.put('/order/:id/status', )

module.exports = {orderRouter: router}