import React, { useEffect } from 'react'
import Navigation from './navigation/Navigation'
import { ToastContainer } from 'react-toastify';
import { store } from './store/store.js'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Navigation />
    </Provider>
  )
}

export default App