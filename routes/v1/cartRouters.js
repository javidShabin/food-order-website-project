const express = require('express')
const { addItemToCart, getCart, removeFromCart } = require('../../controllers/cartController')
const { userAuthentication } = require('../../middlewares/userAuth')
const router = express.Router()

// add item to cart
router.post('/addCart',userAuthentication, addItemToCart)
// get cart
router.get('/getCart',userAuthentication, getCart)
// remove cart
router.delete('/remove', userAuthentication, removeFromCart)

module.exports = {cartRouter: router}