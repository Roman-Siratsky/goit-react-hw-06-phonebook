import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit'
import phoneBookReducer from './phoneBook/phoneBookReducer'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' 
import 
{
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
}from 'redux-persist'


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}
const rootReducer = combineReducers({
    phoneBook: persistReducer(persistConfig, phoneBookReducer)
})

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
     logger,
    ]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)
 
// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor}