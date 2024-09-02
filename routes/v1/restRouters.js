const express = require("express");
const { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require("../../controllers/restController");
const router = express.Router();

// get all reastaurant
router.get('/allRest', getAllRestaurants)
// get reastarant by id
router.get('/rest/:id', getRestaurantById)
// create new restaurant
router.post('/allRest', createRestaurant)
// updata ratauarant
router.put('/rest/:id', updateRestaurant)
// delete restaurant
router.delete('/rest/:id', deleteRestaurant)

module.exports = {restRouter : router}