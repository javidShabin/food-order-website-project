const express = require('express')
const { userAuthentication } = require('../../middlewares/userAuth')
const { getreviews } = require('../../controllers/reviewController')
const router = express.Router()

// add review
router.post('/reviews', userAuthentication, )
router.get('/reviews', getreviews)

module.exports = {reviewRouter: router}