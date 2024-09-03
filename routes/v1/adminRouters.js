const express = require('express')
const { createAdmin, loginAdmin, updateAdmin } = require('../../controllers/adminController')
const router = express.Router()
// admin registration
router.post("/register", createAdmin)
// admin login
router.post("/login", loginAdmin)
// update admin
router.put("/update/:id", updateAdmin)

module.exports = {adminRouter: router}