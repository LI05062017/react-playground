import React from 'react'
import DATA from '../RestaurantApp/DATA'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

const App = () =>
  <div>
    <RestaurantInfo
      name={DATA.company[0].title}
      address={DATA.address}
      phone={DATA.phone}
    />
    <MenuContainer />
  </div>

export default App
