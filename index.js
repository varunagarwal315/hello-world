const express = require('express')
const app = express()

// Define app and add the needed properties to it. Before setting up the server



// Setup a server at a specific port to listen to incoming requests
const server = app.listen(8000, function(){
  console.log("server hosted at 8080");
})

//After the server is setup, add the routers to the app for various urls

//Send a basic response at http://127.0.0.1:8080/
app.use(require('./helloworld/hello.world.router'))

//Send a more advanced response at http://127.0.0.1:8080/hello.htm
app.use('/hello.htm', require('./helloworldadvanced/hello.world.router'))

//For any url apart from the ones stated above, following error file is sent with status 404
app.use(require('./errors/errors.router.js'))
