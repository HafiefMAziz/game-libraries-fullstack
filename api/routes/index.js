const route = require('express').Router()
const gameRoutes = require('./gameRoutes.js')
const genreRoutes = require('./genreRoutes.js')
const platformRoutes = require('./platformRoutes.js')
const publisherRoutes = require('./publisherRoutes.js')
const userRoute = require('./userRoutes')

route.get('/', (req, res) => {
    res.redirect('/games')
})
route.use('/games', gameRoutes);
route.use('/genres', genreRoutes);
route.use('/platforms', platformRoutes);
route.use('/publishers', publisherRoutes);
route.use('/users',userRoute)
module.exports = route