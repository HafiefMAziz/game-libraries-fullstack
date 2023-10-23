const gameRoute = require('express').Router()
const GameController = require('../controllers/GameController.js')


gameRoute.get('/', GameController.getGames)
gameRoute.get('/detail/:id', GameController.getOneGame)
gameRoute.post('/create', GameController.create)
gameRoute.delete('/delete/:id', GameController.delete)
gameRoute.put('/update/:id', GameController.update)
gameRoute.get('/updateForm/:id', GameController.updateForm)

module.exports = gameRoute
