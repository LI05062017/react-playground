import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, complete, id, markComplete}) =>
  <div>
    <h3> title: {title} </h3>
    <p> due: {dueDate}</p>
    <p> complete: {complete.toString()} </p>
    <button id={id} onClick={markComplete}> {complete ? 'mark incomplete' : 'mark complete'} </button>
  </div>

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired

}
export default ToDo
