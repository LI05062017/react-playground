import React from 'react'
import Jumbotron from './Jumbotron'
import CustomerCard from './CustomerCard'
import './index.css'
import Footer from './Footer'
import CustomerCards from './CustomerCards'

const App = ({data}) => {
  return (
    <div>
      <Jumbotron
        title={data.company[0].title}
        street={data.company[0].street}
        city={data.company[0].city}
        state={data.company[0].state}
        zip={data.company[0].zip}
        phonenumber={data.company[0].phoneNumber}
      />
      <CustomerCards
        arr={data.customers}
      />
    </div>
  )
}
export default App