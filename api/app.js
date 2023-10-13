const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index.js')
//Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const cors = require('cors')
app.use(cors()) 

app.use(express.json()); // supaya bisa req json
app.use(express.urlencoded({extended : true}));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))