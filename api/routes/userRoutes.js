const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const {login, isAdmin} = require("../middlewares/auth")
userRoute.post('/create',UserController.create)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.post('/login',login,UserController.login)
userRoute.get('/login/account/:id',UserController.loginById)

module.exports = userRoute