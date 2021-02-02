import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import heroReducer from './reducers/heroReducer'
import favoriteReducer from './reducers/favoriteReducer'
import detailReducer from './reducers/detailReducer'

const rootReducer = combineReducers({
    heroReducer, favoriteReducer, detailReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store