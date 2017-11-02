import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({ title }) => {
  return (
    <div className='jumbotron'>
      <h1> { title } </h1>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
}

export default Jumbotron