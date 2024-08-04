import React from 'react'

import Header from './components/Header'
import Home from './Home'
import Products from './components/Products'
import Singleproduct from './components/Singleproduct'




const App:React.FC = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Products/>
      <Singleproduct/>
    </div>
  )
}

export default App



