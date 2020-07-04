import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import AsyncStorage from '@react-native-community/async-storage'
import Constants from 'expo-constants'

import * as reducers from './reducers'

const encryptor = createEncryptor({
  secretKey: Constants.manifest.extra.REDUX_SECRET_KEY
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }
