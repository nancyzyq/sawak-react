import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: [],
        filteredMenu: [],
        menuItem: {},
        ingredients: [],
        categories: []
    },
    reducers: {
        updateMenu: (state, action) => {
            state.menu = action.payload
        },
        updateFilteredMenu: (state, action) => {
            state.filteredMenu = action.payload
        },
        updateMenuItem: (state, action) => {
            state.menuItem = action.payload
        },
        updateIngredients: (state, action) => {
            state.ingredients = action.payload
        },
        updateCategories: (state, action) => {
            state.categories = action.payload
        }
    }

})

// export default menuReducer
export const { updateMenu, updateFilteredMenu, updateMenuItem, updateIngredients, updateCategories } = menuSlice.actions
export default menuSlice.reducer