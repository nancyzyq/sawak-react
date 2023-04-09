const categoryController = require('../controllers/categoryController')
// const UserController = require('../controllers/UserController')

function categorytGetHandler (req, res, next) {
    if (req.query.id) {
        categoryController.getCategoryById(req.query.id).then((food) => {
            res.status(200).send(food)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        categoryController.getCategories().then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

// function categoryPostHandler (req, res, next) {
//     res.status(200).send('done')
// }

module.exports = function (server) {
    server.get('/api/category', categorytGetHandler)
    // server.get('/api/eventplanningadd', eventPlanningUpdateHandler)
    // server.put('/api/event', accessController.isLogin, eventCreateHandler)
    // server.post('/api/category', UserController.isLogin, categoryPostHandler)
    // server.del('/api/event', accessController.isLogin, eventDeleteHandler)
}
