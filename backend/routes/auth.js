const router = require("express").Router()

const { login, register,verifierEmail, logout } = require('../controller/authController')


router.post('/login', login)
router.post('/register', register)
router.get('/logout', logout)
router.get('/verifierEmail/:token', verifierEmail)



module.exports = router
