const express = require('express')
const { createAddress, updateAddress, getAddress, deleteAddress } = require('../../controllers/addressController')
const { userAuthentication } = require('../../middlewares/userAuth')
const router = express.Router()

// create address
router.post('/address', userAuthentication, createAddress)
// update address
router.put('/address/:id', updateAddress)
// get address
router.get('/address', getAddress)
// delete address
router.delete('/address/:id', deleteAddress)

module.exports = {addressRouter: router}