import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import homeReducer from './home/reducer'
import menuReducer from './menu/reducer'
import userReducer from './user/reducer'

const reducer = combineReducers({
	Home: homeReducer,
	Menu: menuReducer,
	User: userReducer
})

const store = configureStore({
    reducer,
  })

export default store;