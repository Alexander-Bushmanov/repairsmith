import React from 'react'
import Logo from './Logo';
import RepairsSelector from './RepairsSelector'

const App = () => {
  return (
    <div>
      <div className="Header">
        <Logo className="Header__logo" />
        
        <h1 className="Header__title">React/Redux Coding Challenge</h1>
      </div>
      <RepairsSelector />
    </div>
  )
}

export default App
