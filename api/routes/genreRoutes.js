const genreRoute = require('express').Router()
const GenreController = require('../controllers/GenreController.js')


genreRoute.get('/', GenreController.getGenres)
genreRoute.get('/:id', GenreController.getOneGenre)
genreRoute.post('/create', GenreController.create)
genreRoute.delete('/delete/:id', GenreController.delete)
genreRoute.put('/update/:id', GenreController.update)
genreRoute.put('/updateForm/:id', GenreController.updateForm)

module.exports = genreRoute
