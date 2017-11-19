import React, {Component} from 'react'
import DATA from '../RestaurantApp/DATA'
import MenuList from './MenuList'
import SearchForm from './SearchForm'

class MenuContainer extends Component {
state= {
  menuItems: undefined,
  searchTerm: undefined
}

componentDidMount () {
  this.setState({ menuItems: DATA.items })
}

handleSearchTermChange = (e) => {
  this.setState({searchTerm: e.target.value})
}

setMenuItemsToMild = () => {
  const mildFoods = this.state.menuItems.filter(item => {
    return item.spiceLevel < 4 
  })

  this.setState({menuItems: mildFoods})
}

resetMenuList = () => {
  this.setState({ menuItems: DATA.items, searchTerm: '' })
}

updateMenuList = (e) => {
// alert('you are refreshing the page!')
  e.preventDefault()
  const updatedMenuItems = this.state.menuItems.filter(item => {
    const searchTerm = this.state.searchTerm.toLowerCase()
    const menuItems = item.name.toLowerCase()
    return menuItems.includes(searchTerm)
  })
  console.log(updatedMenuItems)
  return this.setState({menuItems: updatedMenuItems})
}

render () {
  return (
    <div>
      <SearchForm
        handleSearchTermChange={this.handleSearchTermChange}
        updateMenuList={this.updateMenuList}
        resetMenuList={this.resetMenuList}
        searchTerm={this.state.searchTerm}
        setMenuItemsToMild={this.setMenuItemsToMild}

      />
      {
        this.state.menuItems
          ? <MenuList foodItems={this.state.menuItems} />
          : <h3> You don't have menu items </h3>
      }
    </div>
  )
}
}

export default MenuContainer
