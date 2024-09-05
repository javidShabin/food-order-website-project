const express = require("express");
const { userRouter } = require("./userRouters");
const { restRouter } = require("./restRouters");
const { adminRouter } = require("./adminRouters");
const { menusRouter } = require("./menuRouters");
const { orderRouter } = require("./orderRouters");
const { cartRouter } = require("./cartRouters");
const { reviewRouter } = require("./reviewRouters");
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
v1Router.use('/orders', orderRouter)
// 
v1Router.use('/cart', cartRouter)
//
v1Router.use('/review', reviewRouter)

module.exports = { v1Router };