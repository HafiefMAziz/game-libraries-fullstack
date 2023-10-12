const platformRoute = require('express').Router()
const PlatformController = require('../controllers/PlatformController.js')


platformRoute.get('/', PlatformController.getPlatforms)
platformRoute.get('/:id', PlatformController.getOnePlatform)
platformRoute.post('/create', PlatformController.create)
platformRoute.get('/delete/:id', PlatformController.delete)
platformRoute.post('/update/:id', PlatformController.update)
platformRoute.get('/updateForm/:id', PlatformController.updateForm)

module.exports = platformRoute
