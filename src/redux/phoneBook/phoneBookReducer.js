import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import * as actions from './phoneBookActions'



const contacts = createReducer([], {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
})

const filter = createReducer('', {
    [actions.changeFilter]: (state, action) => action.payload
})


export default combineReducers({
    contacts,
    filter
})
