const { Menu } = require("../models/menuModel");
const { Order } = require("../models/orderModel");

// create order
const createOrder = async (req, res) => {
    try {
        const { items, restaurant } = req.body;
        let totalPrice = 0;
        // Check if items and restaurant are provided
        if (!items || !restaurant) {
            return res.status(400).json({ message: 'Items and restaurant are required.' });
        }
        // Calculate the total price of the order
        for (let item of items) {
            const menuItem = await Menu.findById(item.menuItem);
            if (!menuItem) {
                return res.status(404).json({ message: `Menu item not found: ${item.menuItem}` });
            }
            totalPrice += menuItem.price * item.quantity;
        }
        // Create a new order
        const order = new Order({
            user: req.user.userId,
            restaurant,
            items,
            totalPrice
        });
        // Save the order to the database
        await order.save();
        // Respond with the created order
        res.status(201).json(order);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the order", error: error.message });
    }
};
// get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { 
    createOrder,
    getOrders
 };
