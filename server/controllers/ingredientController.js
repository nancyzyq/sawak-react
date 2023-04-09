var ingredientController = {}
var ingredients = require('../models/ingredients')

function getIngredients () {
    return new Promise((resolve, reject) => {
        ingredients.find({}, { 
                '_id': 1,
                'id' :1,
                'name': 1,
                'type': 1,
                'created': 1,
                'updated': 1 
            }
          ).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


function updateIngredient (ingredientToUpdate) {
    console.log(ingredientToUpdate)
    return new Promise((resolve, reject) => {
        ingredients.updateOne({_id: ingredientToUpdate._id}, {
            $set: {
                name: ingredientToUpdate.name,
                type: ingredientToUpdate.type,
                updated: new Date()
            }
        }).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                // console.log(data)
                resolve(data)
            }
        })
    })
}

function createIngredient (ingredientToCreate) {
    return new Promise((resolve, reject) => {
        ingredients.create(ingredientToCreate).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log(data)
                resolve(data)
            }
        })
    })
}

function deleteIngredient (id) {
    return new Promise((resolve, reject) => {
        ingredients.deleteOne({_id: id}).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

ingredientController.getIngredients = getIngredients
ingredientController.updateIngredient = updateIngredient
ingredientController.createIngredient = createIngredient
ingredientController.deleteIngredient = deleteIngredient

module.exports = ingredientController
