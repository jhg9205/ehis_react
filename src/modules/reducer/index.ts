import { combineReducers } from 'redux'
import layOutReducer from './layout'
import mapReducer from './map'

const rootReducer = combineReducers({
	mapReducer,
	layOutReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
