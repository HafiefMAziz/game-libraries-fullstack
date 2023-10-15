const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const {login, isAdmin} = require("../middlewares/auth")
userRoute.post('/create',UserController.create)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.post('/login',login,UserController.login)
userRoute.get('/' , UserController.getUser)

module.exports = userRoute