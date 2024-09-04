const express = require('express')
const { addItemToCart, getCart } = require('../../controllers/cartController')
const { userAuthentication } = require('../../middlewares/userAuth')
const router = express.Router()

// add item to cart
router.post('/addCart',userAuthentication, addItemToCart)
// get cart
router.get('/getCart',userAuthentication, getCart)
// remove cart
router.delete('/remove', )

module.exports = {cartRouter: router}