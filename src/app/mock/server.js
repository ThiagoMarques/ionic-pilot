//install: npm install -g json-server
//start: json-server --watch db.json
//if the server return 'max watch limit': echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('./db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})