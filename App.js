import React from 'react'
import axios from 'axios'
import Constants from 'expo-constants'

import Router from './src/routes'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
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
    <Router />
  )
}

export default App
