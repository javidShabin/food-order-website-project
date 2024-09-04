const express = require("express");
const { userRouter } = require("./userRouters");
const { restRouter } = require("./restRouters");
const { adminRouter } = require("./adminRouters");
const { menusRouter } = require("./menuRouters");
const { orderRouter } = require("./orderRouters");
const v1Router = express.Router();

// user router
v1Router.use('/user', userRouter)
// resturant router
v1Router.use('/restaurant', restRouter)
// admin rourt
v1Router.use('/admin', adminRouter)
// 
v1Router.use('/menus', menusRouter)
//
v1Router.use('/orderes', orderRouter)

module.exports = { v1Router };