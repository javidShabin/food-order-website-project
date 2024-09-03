const express = require('express');
const { getMenuItems, createMenuItem, getMenuItemById, updateMenu } = require('../../controllers/menuController');
const { upload } = require('../../middlewares/multer');
const { adminAuthentication } = require('../../middlewares/adminAuth');
const router = express.Router()

// Get all menu items for a restaurant
router.get('/allmenus', getMenuItems);
// get menu by id
router.get('/item/:id', getMenuItemById)
// Create menu item
router.post('/allmenus', adminAuthentication, upload.single("image"), createMenuItem)
// update menus
router.put('/item/:id', adminAuthentication, updateMenu)

module.exports = {menusRouter: router}