var friendsArray = require('../data/friends.js')

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsArray)
  })

  app.post('/api/friends', function(req, res){
    //request info from the api body
    // console.log(req.body)
    // holding user inputs values in variables
    var newUser = req.body
    var scores = newUser.scores

    var scoreStart = 100
    var scoreDiff = 0
    // best match held in a var object
    var bestMatch = {
      name: '',
      pic: '',
      score: ''
    }

    //looping threw each friend in friendsArray
    for(var i = 0; i < friendsArray.length; i ++){
      // then for each friend loop threw the scores
      for(var x = 0; x < friendsArray[i].scores[x] ; x ++) {                        //-----see if you can do friendsArray[i].scores.length---//
        //Math.abs returns absolute value of a number // parseInt to make sure it a number
        scoreDiff += Math.abs(parseInt(scores[x] - friendsArray[i].scores[x]))    //----might have to put parseInt on friendsArray
        // console.log(scoreDiff)
        // putting best match results into an object to send back to html
        if( scoreDiff <= scoreStart ) {
          bestMatch.name = friendsArray[i].name
          bestMatch.pic = friendsArray[i].photo
          bestMatch.score = scoreDiff
        }
      }
    }
    // console.log(bestMatch)
    //add last because it will match with itself
    friendsArray.push(req.body)                  //------why does this not push int the actually friends array in the friends.js //--require ('fs)
    res.json(bestMatch)
  })
}