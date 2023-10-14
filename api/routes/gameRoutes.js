const gameRoute = require('express').Router()
const GameController = require('../controllers/GameController.js')
const {isAdmin,login} = require("../middlewares/auth")

gameRoute.get('/', GameController.getGames)
gameRoute.get('/detail/:id', GameController.getOneGame)
gameRoute.post('/create', GameController.create)
gameRoute.get('/delete/:id', GameController.delete)
gameRoute.post('/update/:id', GameController.update)
gameRoute.get('/updateForm/:id', GameController.updateForm)

module.exports = gameRoute
