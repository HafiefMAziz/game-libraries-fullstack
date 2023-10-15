const publisherRoute = require('express').Router()
const PublisherController = require('../controllers/PublisherController.js')


publisherRoute.get('/', PublisherController.getPublishers)
publisherRoute.get('/:id', PublisherController.getOnePublisher)
publisherRoute.post('/create', PublisherController.create)
publisherRoute.delete('/delete/:id', PublisherController.delete)
publisherRoute.put('/update/:id', PublisherController.update)
publisherRoute.put('/updateForm/:id', PublisherController.updateForm)

module.exports = publisherRoute
