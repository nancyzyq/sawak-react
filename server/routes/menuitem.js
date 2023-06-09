const menuItemController = require('../controllers/menuItemController')
const userController = require('../controllers/userController')

function menuitemGetHandler (req, res, next) {
    if (req.query.id) {
        menuItemController.getMenuitemById(req.query.id).then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else if (req.query.type) {
        menuItemController.getMenuitemByType(req.query.type).then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        menuItemController.getMenuitems().then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

function menuitemUpdateHandler (req, res, next) {
    // console.log(req.body.menuitem)
    menuItemController.updateMenuitem(req.body.menuitem).then((menuitem) => {
        // console.log(menuitem)
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
    // res.status(200).send('done')
}

function menuitemCreateHandler (req, res, next) {
    menuItemController.createMenuitem(req.body.menuitem).then((menuitem) => {
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

function menuitemDeleteHandler (req, res, next) {
    // console.log(req.query.id)
    menuItemController.deleteMenuitem(req.query.id).then((menuitem) => {
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

module.exports = function (server) {
    server.get('/api/menuitem', menuitemGetHandler)
    server.put('/api/menuitem', userController.isLogin, menuitemUpdateHandler)
    server.post('/api/menuitem', userController.isLogin, menuitemCreateHandler)
    server.delete('/api/menuitem', userController.isLogin, menuitemDeleteHandler)
}
