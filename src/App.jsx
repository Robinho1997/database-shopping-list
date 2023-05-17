import { useEffect, useState } from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

function App() {
  const appSettings = {
    databaseURL: "https://einkaufsliste-c73a2-default-rtdb.europe-west1.firebasedatabase.app/"
  }
  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const shoppingListInDB = ref(database, "shoppingList")


  const [items, setItems] = useState()
  const [inputValueShoppingItem, setInputValueShoppingItem] = useState("");


  function addItemToDatabase() {
    push(shoppingListInDB, inputValueShoppingItem)
    setInputValueShoppingItem("")
  }


  useEffect(() => {
    onValue(shoppingListInDB, function (snapshot) {
      if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        console.log(itemsArray)
        let elements = itemsArray.map(item => {
          return <li onClick={() => removeItemfromDatabase(item[0])} key={item}>{item[1]}</li>
        })
        setItems(elements)
      } else {
        setItems(null)
      }
    })
  }, [])


  function removeItemfromDatabase(key) {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${key}`)
    remove(exactLocationOfItemInDB)
  }


  return (
    <div className='container'>
      <img className='groceries-img' src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
      <input onChange={(e) => setInputValueShoppingItem(e.target.value)} value={inputValueShoppingItem} type='text' placeholder='Brot' />
      <button onClick={addItemToDatabase}>
        <img className='cart-icon' src='/trolley.png' />
      </button>
      <ul className='shoppingList'>
        {items}
      </ul>
    </div>
  )
}

export default App
