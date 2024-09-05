const { Menu } = require("../models/menuModel");
const { Restaurant } = require("../models/restModel");
const { Review } = require("../models/reviewModel");

const createReview = async () => {
  try {
    // destructure values from req.body
    const { rating, comment, restaurant, menuItem } = req.body;
    const userId = req.user.id;

    if (!rating || (restaurant === undefined && menuItem === undefined)) {
      return res.status(400).json({
        message:
          "rating is required, and either restaurant or menuItem must be provided.",
      });
    }
    // check if restaurant
    if (restaurant) {
      const restaurantExists = await Restaurant.findById(restaurant);
      if (!restaurantExists) {
        return res.status(404).json({ message: "restaurant not found" });
      }
    }
    // check if menu menuItem exists
    if (menuItem) {
      const menuItemExists = await Menu.findById(menuItem);
      if (!menuItemExists) {
        return res.status(404).json({ message: "menu item not found" });
      }
    }
    // create a new review
    const review = new Review({
      user: userId,
      restaurant,
      menuItem,
      rating,
      comment,
    });
    // save review to database
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the review.",
      error: error.message,
    });
  }
};

const getreviews = async () => {
  try {
  } catch (error) {}
};

module.exports = {
  createReview,
  getreviews,
};
