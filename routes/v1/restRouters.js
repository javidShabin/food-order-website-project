const express = require("express");
const { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require("../../controllers/restController");
const { adminAuthentication } = require("../../middlewares/adminAuth");
const router = express.Router();

// get all reastaurant
router.get('/allRest', getAllRestaurants)
// get reastarant by id
router.get('/rest/:id', getRestaurantById)
// create new restaurant
router.post('/allRest', adminAuthentication, createRestaurant)
// updata ratauarant
router.put('/rest/:id', adminAuthentication, updateRestaurant)
// delete restaurant
router.delete('/rest/:id', adminAuthentication, deleteRestaurant)

module.exports = {restRouter : router}