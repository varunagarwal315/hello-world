const router = require('express').Router()

router.get('/', function(request, response){
  response.sendFile(__dirname + '/hello.world.htm')
})

module.exports = router;
