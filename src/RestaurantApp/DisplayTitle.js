import React from 'react'
import PropTypes from 'prop-types'

const DisplayTitle = ({company}) => {
  const mappedCompany = company.map((company) => {
    return (
      <div>
        <h3>{company.title}</h3>
      </div>
    )
  })
  return (
    <div className='jumbotronTwo'>
      {
        mappedCompany
      }
    </div>
  )
}

export default DisplayTitle