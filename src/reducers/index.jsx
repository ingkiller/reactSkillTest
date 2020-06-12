import { combineReducers } from 'redux'
import reducerApp from './app'
import reducerFilter from './filter'

export default combineReducers({
    app:reducerApp,
    filter:reducerFilter
})
