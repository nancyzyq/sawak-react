// import { createAction } from '@reduxjs/toolkit'
import {API} from '../../api/api'
import { updateMenu, updateFilteredMenu, updateMenuItem, updateIngredients, updateCategories } from './reducer'
import { showToast } from '../Home/action'
const { v4: uuidv4 } = require('uuid')
const menuAPI = new API('menuitem')
const ingredientAPI = new API('ingredient')
const categoryAPI = new API('category')

// fetch all menu items 
export const getMenuItems = () => async (dispatch, getState) => {
    try {
        let re = await menuAPI.fetch()
        re.map((i) => {
            // i.ingredientString = generateIngredientString(i.ingredients)
            // let ingredients = []
            // i.ingredients.map((j) => {
            //     ingredients.push(j.name)
            // })
            let ingredients = i.ingredients.map((j) => j.name)
            i.ingredients = ingredients.join(', ')
            // i.image = i.image.replace('localhost:3000', '18.218.99.109')
        })
        dispatch(updateMenu(re))
        dispatch(updateFilteredMenu(re))
    } catch (err) {
        console.log(err)
    }
}

// fetch menu item by id
export const getMenuItem = (id) => async (dispatch, getState) => {
    try {
        let re = await menuAPI.getById({id: id})
        // console.log(food)
        // food.image = food.image.replace('localhost:3000', '18.218.99.109')
        dispatch(updateMenuItem(re))
    } catch (err) {
        console.log(err)
    }
}

// fetch menu items by type
export const getMenuItemsByType = (types) => async (dispatch, getState) => {
    dispatch(updateFilteredMenu([]))
    let menu = getState().Menu.menu
    if (types.length > 0) menu = menu.filter((i) => types.findIndex((j) => j.value === i.type.name) !== -1)
    dispatch(updateFilteredMenu(menu))
    
}

// update menu item
export const editMenuItem = (item) => async (dispatch, getState) => {
	// console.log(image)
    try {
        let re = await menuAPI.update({menuitem: item})
        console.log(re)
        dispatch(showToast('Menu item updated.'))
        window.location.href = '/admin/menuitem'
    } catch (err) {
        console.log(err)
    }
    
}

export const createMenuItem = (item) => async (dispatch) => {
    try {
        item.id = uuidv4()
        console.log(item)
        let re = await menuAPI.create({menuitem: item})
        console.log(re)
        dispatch(showToast('Menu item created.'))
        window.location.href = '/admin/menuitem'
    } catch (err) {
        console.log(err)
    }
    
}

export const deleteMenuItemById = (id) => async (dispatch) => {
    try {
        let re = await menuAPI.delete({id: id})
        console.log(re)
        dispatch(showToast('Menu item deleted.'))
    } catch (err) {
        console.log(err)
    }
    
}

// fetch all ingredients 
export const getIngredients = () => async (dispatch, getState) => {
    try {
        let re = await ingredientAPI.fetch()
        let ingredients = re.map((i) => { return { name: i.name, _id: i._id, type: i.type} })
        // re.map((i) => {
        //     let j = {name: i.name, _id: i._id}
        //     ingredients.push(j)
        // })
        // console.log(ingredients)
        // console.log(ingredients)
        dispatch(updateIngredients(ingredients))
    } catch (err) {
        console.log(err)
    }
}

export const createIngredient = (ingredient) => async (dispatch) =>{
    try {
        ingredient.id = uuidv4()
        await ingredientAPI.create({ingredient: ingredient})
        dispatch(showToast('Ingredient created.'))
        dispatch(getIngredients())
    } catch (err) {
        console.log(err)
    }
}

// update ingredient 
export const editIngredient = (item) => async (dispatch, getState) => {
	console.log(item)
    try {
        await ingredientAPI.update({ingredient: item})
        dispatch(showToast('Ingredient updated.'))
        
    } catch (err) {
        console.log(err)
    }
    
}

export const deleteIngredientById = (id) => async (dispatch) => {
    try {
        await ingredientAPI.delete({id: id})
        dispatch(showToast('Menu deleted.'))
        dispatch(getIngredients())
    } catch (err) {
        console.log(err)
    }
}

// fetch all categories
export const getCategories = () => async (dispatch) => {
    try {
        let re = await categoryAPI.fetch()
        let categories = re.map((i) => { return { name: i.name, _id: i._id } })
        dispatch(updateCategories(categories))
    } catch (err) {
        console.log(err)
    }
}