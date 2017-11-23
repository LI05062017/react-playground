import React from 'react'
import PropTypes from 'prop-types'

const Section = ({title, content, sectionStyle, children}) => {
  return (
    <div className={sectionStyle}>
      <h5> {title} </h5>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sectionStyle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired

}

export default Section
