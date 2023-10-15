const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const {login, isRegistered} = require("../middlewares/auth")
userRoute.post('/create',isRegistered, UserController.create)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.post('/login',login,UserController.login)
userRoute.get('/' , UserController.getUser)
userRoute.put('/update/:id' , UserController.update)

module.exports = userRoute