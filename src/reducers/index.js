import { combineReducers } from 'redux'
import { HELLO_WORLD, RESET } from './../actions'
import { SEND } from './../actions'

let initialState = { message: 'Farshad' }
const channelReducer = (state=initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: 'A distributed Streaming platform' })
    case RESET:
    	return state = initialState 
    default:
      return state
  }
}


let initialMessageState = { messageText: 'salam,khubi?' }
const messageReducer=(state=initialMessageState, action) => {
    switch (action.type) {
        case SEND: {
            return Object.assign({}, state, {messageText: action.payload})
        }
        default:
            return state
    }
}


const allReducers = combineReducers({
    channelReducer,messageReducer
})

export default allReducers
