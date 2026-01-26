import * as types from '../actions/actionTypes'

const initialState = {
  isVisible: false,
  title: '',
  increment: '',
  content: ''
}

export default function entryModal(state = initialState, action){
  let { title, defaultIncrement } = action
  switch(action.type){
    case types.START_NEW_ENTRY:
      return {
        ...state,
        isVisible: true,
        title,
        increment: String(defaultIncrement || ''),
        content: ''
      }
    case types.UPDATE_ENTRY_CONTENT:
      return {
        ...state,
        [action.field]: action.value
      }
    case types.SAVE_NEW_ENTRY:
    case types.CANCEL_NEW_ENTRY:
      return initialState
    default:
      return state
  }
}
