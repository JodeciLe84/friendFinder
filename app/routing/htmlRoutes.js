var path = require('path')

// Exporting Function

module.exports = function(app) {

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
  })

  //default to home page
  app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  })
}
