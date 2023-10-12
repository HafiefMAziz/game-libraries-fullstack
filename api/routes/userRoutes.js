const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.post('/create',UserController.create)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.post('/login',UserController.login)

module.exports = userRoute