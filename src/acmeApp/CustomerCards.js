import React from 'react'
import PropTypes from 'prop-types'
import CustomerCard from './CustomerCard'

const CustomerSection = ({arr}) => {
  return (
    <div>
      {
        arr.map((customer) => {
          return <CustomerCard customer={customer} />
        })
      }
    </div>
  )
}

// const CustomerCards = ({customer}) => {
//   return (
//     <div className='customercards'>
//       <h1>{customer.name}</h1>
//       <p>{customer.email}</p>
//       <img src={customer.img} />
//     </div>
//   )
// }

export default CustomerSection