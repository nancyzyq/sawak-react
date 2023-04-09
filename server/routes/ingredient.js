const ingredientController = require('../controllers/ingredientController')
const userController = require('../controllers/userController')

function ingredientGetHandler (req, res, next) {
    if (req.query.id) {
        ingredientController.getIngredientById(req.query.id).then((food) => {
            res.status(200).send(food)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        ingredientController.getIngredients().then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

function ingredientCreateHandler (req, res, next) {
    // console.log('aa', req.body.ingredient)
    ingredientController.createIngredient(req.body.ingredient).then((data) => {
        // console.log(data)
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

function ingredientUpdateHandler (req, res, next) {
    // console.log(req)
    ingredientController.updateIngredient(req.body.ingredient).then((data) => {
        // console.log(data)
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
    // res.status(200).send('done')
}

function ingredientDeleteHandler (req, res, next) {
    // console.log(req.query.id)
    ingredientController.deleteIngredient(req.query.id).then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

module.exports = function (server) {
    server.get('/api/ingredient', ingredientGetHandler)
    server.put('/api/ingredient', userController.isLogin, ingredientUpdateHandler)
    server.post('/api/ingredient', userController.isLogin, ingredientCreateHandler)
    server.delete('/api/ingredient', userController.isLogin, ingredientDeleteHandler)
}
