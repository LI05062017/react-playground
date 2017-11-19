import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete, markComplete}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{dueDate}</p>
      <p>{id}</p>
      <p>{complete}</p>
      <button onClick={markComplete} type='button' />
      {
        complete
          ? 'Mark as Inomplete'
          : 'Mark as Complete'
      }
    </div>
  )
}
ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired
}
export default ToDo
