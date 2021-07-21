import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/userReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        users: userReducer
    }))
    return store
}

export default configStore
