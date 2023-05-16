import { useState } from 'react'



function App() {


  return (
    <div className='container'>
      <img className='groceries-img' src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
      <input type='text' placeholder='Brot'></input>
      <button>Add to cart</button>
    </div>
  )
}

export default App
