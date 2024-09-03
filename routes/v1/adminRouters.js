const express = require('express')
const { createAdmin, loginAdmin, updateAdmin, logoutAdmin } = require('../../controllers/adminController')
const router = express.Router()
// admin registration
router.post("/register", createAdmin)
// admin login
router.post("/login", loginAdmin)
// logout admin
router.post("/logout", logoutAdmin)
// update admin
router.put("/update/:id", updateAdmin)

module.exports = {adminRouter: router}