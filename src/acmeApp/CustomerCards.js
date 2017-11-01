import React from 'react'
import PropTypes from 'prop-types'

const CustomerSection = ({arr}) => {
  return (
    <div>
      {
        arr.map((customer) => {
          return <CustomerCards customer={customer} />
        })
      }
    </div>
  )
}

const CustomerCards = ({customer}) => {
  return (
    <div className='customercards'>
      <h1>{customer.name}</h1>
      <p>{customer.email}</p>
      <img src={customer.img} />
    </div>
  )
}

export default CustomerSection