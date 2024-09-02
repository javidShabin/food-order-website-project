const express = require("express");
const { userRouter } = require("./userRouters");
const { restRouter } = require("./restRouters");
const v1Router = express.Router();

v1Router.use('/user', userRouter)
v1Router.use('restaurant', restRouter)

module.exports = { v1Router };