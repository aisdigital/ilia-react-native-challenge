import React from 'react'
import axios from 'axios'
import Constants from 'expo-constants'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Router from './src/routes'
import { store, persistor } from './src/store'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      api_key: Constants.manifest.extra.API_KEY
    }
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
