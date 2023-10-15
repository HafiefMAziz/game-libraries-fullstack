const platformRoute = require('express').Router()
const PlatformController = require('../controllers/PlatformController.js')

platformRoute.get('/', PlatformController.getPlatforms)
platformRoute.get('/:id', PlatformController.getOnePlatform)
platformRoute.post('/create', PlatformController.create)
platformRoute.delete('/delete/:id', PlatformController.delete)
platformRoute.put('/update/:id', PlatformController.update)
platformRoute.put('/updateForm/:id', PlatformController.updateForm)

module.exports = platformRoute
