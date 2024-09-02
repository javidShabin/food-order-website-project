const express = require("express");
const { userRouter } = require("./userRouters");
const { restRouter } = require("./restRouters");
const v1Router = express.Router();

// user router
v1Router.use('/user', userRouter)
// resturant router
v1Router.use('/restaurant', restRouter)

module.exports = { v1Router };