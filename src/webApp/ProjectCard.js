import React from 'react'
import PropTypes from 'prop-types'

const Projects = ({project, title, img}) => {
  return (
    <div className='project-card'>
      <h4>{project}</h4>
      <h4>{title}</h4>
      <img src={img} />
    </div>
  )
}

Projects.propTypes = {
  project: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired

}

export default Projects
