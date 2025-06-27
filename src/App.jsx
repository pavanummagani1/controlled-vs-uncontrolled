import React from 'react'
import { ControlledComponents } from './controlledComponents.jsx'
import { UncontrolledComponents } from './uncontrolledComponents.jsx'

const App = () => {
  return (
    <div className='mainContainer'>
      <h1 className='title'>Controlled vs UnControlled Components</h1>
      <div className='container'>
        <div className='left'> <ControlledComponents /></div>
        <div className='right'><UncontrolledComponents /> </div>
      </div>
      <button className='button'><a className='link' href="https://github.com/pavanummagani1/controlled-vs-uncontrolled.git" target='_blank'>Click here for Source Code</a></button>
    </div>
  )
}
export default App