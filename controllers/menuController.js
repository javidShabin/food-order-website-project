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

// create menu items
const createMenuItem = async (req, res) => {
  const { name, ...rest } = req.body;
  if (!name || Object.keys(rest).length === 0) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existItem = await Menu.findOne({ name });
  if (existItem) {
    return res.status(409).json({ message: "Restaurant already exists" });
  }
  if (req.file) {
    console.log("Uploading file to Cloudinary...");
    uploadResult = await cloudinaryInstance.uploader.upload(req.file.path)
    console.log("Upload result:", uploadResult);
  }
  const newItem = new Menu({
    name,
    ...rest,
    image: uploadResult.secure_url || "",
  })
  const saveMenuItem = await newItem.save()
  res.status(201).json(saveMenuItem)
};

module.exports = {
  getMenuItems,
  createMenuItem,
};
