const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken');
const Secret = 't3rc3SkawaS'

var userController = {};

const hashPassword = (passwd) => {
    return bcrypt.hashSync(passwd.toString(), 2)
}

const checkPassword = (passwd, hash) => {
    return bcrypt.compareSync(passwd.toString(), hash)
}

// var user = {
//     username: 'admin',
//     password: '$2a$04$47R4uZVQ54MbW2TBzNcTyONvMSmail4b8ntLzqMxZ3zycGkmOSzGe'
// }
var user = {
    username: 'admin',
    password: '$2b$04$JOUyq7CRvitO0J4VmY4YRuH6/W5w/0bv7wvBqFwp6DlXqiBOLBuai',
	role: 'admin'
	// admin123
}


function signIn (username, passwd) {
    // console.log(username, passwd, user.password)
	return new Promise((resolve, reject) => {
        // let pass = hashPassword(passwd)
        // console.log(pass)
        // resolve(pass)
		if (username === user.username && checkPassword(passwd, user.password)) {
			let re = {
					username: username,
					role: user.role,
					expire: moment().add(1, 'h').toDate()
			}
			generateToken({username: username}).then((token) => {
				re.token = token
				resolve(re)
			}).catch((err) => {
				reject(err)
			})
		} else {
			reject('username and password not match')
		}
	})
}

function isLogin (req, res, next) {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		let token = req.headers.authorization.split(' ')[1]
		// console.log(req.headers.authorization)
		verifyToken(token).then((user) => {
			if (user.username) {
				// console.log(user.username)
				next()
			} else {
				res.send(500, 'not loged in')
			}
		}).catch(function (error) {
			 console.log(error)
			//  loggerController.error(error)
			 res.send(500, 'not loged in')
		})
	} else {
		res.send(500, 'not loged in')
	}
}

const generateToken = (user) => {
	return new Promise((resolve, reject) => {
		user.exp = Math.floor(Date.now() / 1000) + (60 * 60)
		jwt.sign(user, Secret, function (err, token) {
			if (err) {
				reject(err)
			} else {
				resolve(token)
			}
		})
	})
}

  const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, Secret, function (err, data) {
        if (err) {
          console.log('err')
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
}

userController.signIn = signIn
userController.isLogin = isLogin

module.exports = userController;
