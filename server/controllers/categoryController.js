var categoryController = {}
var categories = require('../models/categories')

function getCategories () {
    return new Promise((resolve, reject) => {
        categories.find({}, { 
                '_id': 1,
                'id' :1,
                'name': 1,
                'created': 1,
                'updated': 1 }
                // , function (err, data) {
                //     if (err) reject(err)
                //     resolve(data)
                // }
          ).then((data, err) => { 
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

categoryController.getCategories = getCategories

module.exports = categoryController
