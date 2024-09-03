const { cloudinaryInstance } = require("../config/cloudinaryConfig");
const { Menu } = require("../models/menuModel");

// menu list for restaurant
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find({});
    return res.status(200).json(menuItems);
  } catch (error) {
    res.status(404).json({ message: "Server not responese..." });
  }
};

// get menu item by id
const getMenuItemById = async (req, res) => {
  try {
    // get menu item id from req.param
    const { id } = req.params;
    // find item with id
    const item = await Menu.findOne({ _id: id });
    // check if the item have it or not
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    // if have the item
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "error fetching item", error });
  }
};
// create menu items
const createMenuItem = async (req, res) => {
  try {
    const { name, ...rest } = req.body;
    if (!name || Object.keys(rest).length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existItem = await Menu.findOne({ name });
    if (existItem) {
      return res.status(409).json({ message: "Item already exists" });
    }
    if (req.file) {
      console.log("Uploading file to Cloudinary...");
      uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
      console.log("Upload result:", uploadResult);
    }
    const newItem = new Menu({
      name,
      ...rest,
      image: uploadResult.secure_url || "",
    });
    const saveMenuItem = await newItem.save();
    res.status(201).json(saveMenuItem);
  } catch (error) {}
};

module.exports = {
  getMenuItems,
  createMenuItem,
  getMenuItemById
};
