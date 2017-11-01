import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({title, desc}) => {
  return (
    <div className='jumbotron' >
      <h3> { title } </h3>
      <p> { desc } </p>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default Jumbotron
