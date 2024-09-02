const { Restaurant } = require("../models/restModel")

// restaurant list
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({})
        return res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({ message: "Server not responese..." });
    }
    res.send("working")
}
// get restaurant by id
const getRestaurantById = async (req, res) => {
    try {
        // get restaurant id from req.params
        const {id} = req.params
        // find restaurant with the id
        const restData = await Restaurant.findOne({_id: id})
        // send the response
        res.json({
            success: true,
            message: "Restaurant",
            data: restData
        })
    } catch (error) {
        
    }
    res.send("working")
}
// create restaurant
const createRestaurant = async (req, res) => {
    res.send("working")
}
// update restaurant
const updateRestaurant = async (req, res) => {
    res.send("working")
}
// delete restaurant
const deleteRestaurant = async (req, res) => {
    res.send("working")
}

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}