import * as types from './actionTypes'

export function startEntry(item){
  return {
    type: types.START_NEW_ENTRY,
    ...item
  }
}

export function saveEntry(){
  return {
    type: types.SAVE_NEW_ENTRY
  }
}

export function cancelEntry(){
  return {
    type: types.CANCEL_NEW_ENTRY
  }
}

export function updateEntryContent(field, value){
  return {
    type: types.UPDATE_ENTRY_CONTENT,
    field,
    value
  }
}
