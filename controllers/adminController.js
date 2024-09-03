
// admin registration
const createAdmin = async (req, res) => {
    res.send("register admin")
}
// admin login
const loginAdmin = async (req, res) => {
    res.send("login admin")
}
// update admin
const updateAdmin = async (req, res) => {
    res.send("update admin")
}
module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin
}