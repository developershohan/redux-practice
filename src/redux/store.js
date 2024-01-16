import { createStore, combineReducers } from "redux"
import counterReducer from "./counterReducer"
import backgroundReducer from "./backgroundReducer"
const store = createStore(combineReducers({
    counter: counterReducer,
    background: backgroundReducer
}))

export default store