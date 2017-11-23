import React from 'react'
import PropTypes from 'prop-types'

const ResumeCard = ({title, details}) => {
  return (
    <div className='resume-card'>
      <div className='icon-circle'>
        <span className='fa fa-video-camera service-icon' />
      </div>
      <h3> {title} </h3>
      <p> {details} </p>
      <a> Learn more! </a>
    </div>
  )
}

ResumeCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
}

export default ResumeCard
