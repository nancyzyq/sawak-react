var menuItemController = {};
var menuitems = require('../models/menuitems')
const { v4: uuidv4 } = require('uuid')

function getMenuitems () {
    return new Promise((resolve, reject) => {
        menuitems.find({}, {'_id': 0}).populate({
            path: 'ingredients',
            model: 'ingredients',
            select: {'_id': 0}
        }).populate({
            path: 'type',
            model: 'categories',
            select: 'name'
        }).then((data, err) => { 
            if (err) reject(err)
            resolve(data)
        })
    })
}

function getMenuitemByType (type) {
    return new Promise((resolve, reject) => {
        // 
        menuitems.find({type: type}, {'_id': 0}).populate({
            path: 'ingredients',
            model: 'ingredients',
            select: {'_id': 0}
        }).populate({
            path: 'type',
            model: 'categories',
            select: 'name'
        }).then((data, err) => { 
            if (err) reject(err)
            console.log(data)
            resolve(data)
        })
    })
}

function getMenuitemById (id) {
    return new Promise((resolve, reject) => {
        // 
        menuitems.findOne({id: id}, {'_id': 0}).populate({
            path: 'ingredients',
            model: 'ingredients',
            select: {'_id': 0}
        }).populate({
            path: 'type',
            model: 'categories',
            select: 'name'
        }).then((data, err) => { 
            if (err) reject(err)
            // console.log(data)
            resolve(data)
        })
    })
}

function updateMenuitem (menuitemsToUpdate) {
    return new Promise((resolve, reject) => {
        menuitems.updateOne({id: menuitemsToUpdate.id}, {
            $set: {
                ingredients: [], // delete all ingredient first
                type: menuitemsToUpdate.type,
                active: menuitemsToUpdate.active,
                price: menuitemsToUpdate.price,
                // image: menuitemsToUpdate.image,
                name: menuitemsToUpdate.name,
                number: menuitemsToUpdate.number
            }
        }).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                if (menuitemsToUpdate.ingredients && menuitemsToUpdate.ingredients.length > 0) {
                    menuitems.updateOne({id: menuitemsToUpdate.id}, {
                        $push: { ingredients: { $each: menuitemsToUpdate.ingredients } } // insert all ingredients
                    }).then((data, err) => {
                        if (err) {
                            console.log(err)
                            reject(err)
                        } else {
                            // console.log(data)
                            resolve(data)
                        }
                        
                    })
                } else {
                    resolve(data)
                }
            }
        })
    })
}

function createMenuitem (menuitemsToCreate) {
    return new Promise((resolve, reject) => {
        menuitems.create(menuitemsToCreate).then((data, err) => { 
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

function deleteMenuitem (id) {
    return new Promise((resolve, reject) => {
        menuitems.deleteOne({id: id}).then((data, err) => { 
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

menuItemController.getMenuitems = getMenuitems
menuItemController.getMenuitemById = getMenuitemById
menuItemController.updateMenuitem = updateMenuitem
menuItemController.createMenuitem = createMenuitem
menuItemController.deleteMenuitem = deleteMenuitem
menuItemController.getMenuitemByType = getMenuitemByType

module.exports = menuItemController;
