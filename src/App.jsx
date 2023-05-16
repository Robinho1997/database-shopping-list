import { useState } from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import ShoppingList from './ShoppingList'

function App() {

  const appSettings = {
    databaseURL: "https://einkaufsliste-c73a2-default-rtdb.europe-west1.firebasedatabase.app/"
  }

  const app = initializeApp(appSettings);

  const database = getDatabase(app);

  const ShoppingListInDB = ref(database, "shoppingList")



  return (
    <div className='container'>
      <img className='groceries-img' src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
      <input type='text' placeholder='Brot'></input>
      <button>Add to cart</button>
      <ShoppingList />
    </div>
  )
}

export default App
