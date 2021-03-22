// import * as types from './phoneBookTypes'
import shortId from 'shortid'
import { createAction } from '@reduxjs/toolkit'




export const addContact = createAction('phoneBook/add', (name, number) => ({
    payload:{
        id: shortId.generate(),
        name,
        number,
    }
}))
export const deleteContact = createAction('phoneBook/delete')
export const changeFilter = createAction('phoneBook/filter')
export const makeAlert = createAction('phoneBook/alert')

