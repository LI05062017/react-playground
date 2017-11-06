import React, {Component} from 'react'
import DATA from './DATA'
import './style.css'
import PropTypes from 'prop-types'
import DisplayTitle from './DisplayTitle'
import DisplayAddress from './DisplayAddress'
import DisplayPriceTag from './DisplayPriceTag'
import DisplayPhoneNumber from './DisplayPhoneNumber'
import DisplayMenu from './DisplayMenu'

class RestaurantApp extends Component {
  state = {
    items: undefined,
    searchTerm: undefined
  }

  componentDidMount () {
    this.setState({ items: DATA.items })
  }

  reset = () => {
    this.setState({ items: DATA.items, searchTerm: '' })
  }

   handleSearchTermChange = (e) => {
     let wordToSearch = e.target.value
     this.setState({ searchTerm: wordToSearch })
   }

   submitForm = (e) => {
     e.preventDefault()
     const items = this.state.items
     const searchTerm = this.state.searchTerm

     if (!searchTerm) {
       alert('Must enter a food item!!')
     } else {
       const matchedItems = items.filter(items => {
         return items.split(' ').includes(searchTerm)
       })
       console.log(matchedItems)

       if (matchedItems.length === 0) {
         this.setState({ Items: ['No matched food item'] })
       } else {
         this.setState({ items: matchedItems })
       }
     }
   }
   render () {
     return (
       <div>
         <div className='body'>
           <h1 className='jumbotron'>Mexican Restaurant</h1>
           <DisplayTitle company={DATA.company} />
           <DisplayAddress address={DATA.address} />
           <DisplayPriceTag priceTag={DATA.priceTag} />
           <DisplayPhoneNumber phone={DATA.phone} />
           <DisplayMenu items={DATA.items} />
         </div>
         <form onSubmit={this.submitForm}>
           <h2 className='search'> Search Restraunt Items </h2>
           <input
             value={this.state.searchTerm}
             onChange={this.handleSearchTermChange}
             type='text'
             placeholder='Search'
           />
           <button type='submit'>Search</button>
         </form>
         <ul>
           {
             this.state.items
               ? this.state.items.map((items, index) => {
                 return <li key={index}>{items.name}</li>
               })
               : <p>Loading</p>
           }
         </ul>
       </div>
     )
   }
}
export default RestaurantApp
