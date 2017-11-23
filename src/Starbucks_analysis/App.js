import React from 'react'
import DATA from './DATA'
import DrinkList from './DrinkList'

const App = () => {
  const classicEspresso = DATA.filter(item => {
    return item.category === 'Classic Espresso Drinks'
  })

  const signatureEspresso = DATA.filter(item => {
    return item.category === 'Signature Espresso Drinks'
  })

  const noMilk = DATA.filter(item => {
    let itemArray = item.beveragePrep.split(' ')
    return itemArray[itemArray.length - 1] !== 'Milk'
  })
  console.log(classicEspresso)
  return (
    <div>

      <h1> Classic Espresso </h1>
      <DrinkList
        data={classicEspresso}
      />
      <h1> Signature Espresso </h1>
      <DrinkList
        data={signatureEspresso}
      />
      <h1> No Milk </h1>
      <DrinkList data={noMilk} />
    </div>
  )
}

export default App
