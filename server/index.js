const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
const ingredientRouter = require('./routes/ingredient')
const categoryRouter = require('./routes/category')
const userRouter = require('./routes/user')
const menuitmeRouter = require('./routes/menuitem')

const server = express()
const port = 3001

server.use(cors())

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});
server.use(bodyParser.json());
server.use(express.static('public'));
// var opt = {
// 	// useNewUrlParser: true,
// 	// useUnifiedTopology: true,
// 	user: 'Admin',
// 	pass: '987604062Steven',
// 	// poolSize: 5,
// 	auth: {
// 		authdb: 'sawakdb'
// 	}
// 	// authSource: 'sawakdb'
//   }

mongoose.connect('mongodb://Admin:987604062Steven@54.206.204.237:27017/sawakdb').catch(err => console.log(err))

server.get('/', (req, res, next) => res.send('Hello World!'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))

ingredientRouter(server)
categoryRouter(server)
userRouter(server)
menuitmeRouter(server)

