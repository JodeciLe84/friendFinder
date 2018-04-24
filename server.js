var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

//Port
var PORT = process.env.port || 3000

//Middle Wares
app.use(express.static(path.join(__dirname + '/app/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Requireing Routes form the path. // api route first
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

//Starting Server
app.listen(PORT, function () {
  console.log('Server listening on http://localhost:' + PORT)
})