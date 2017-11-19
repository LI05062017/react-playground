import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  formContainer: {
    backgroundColor: '#336E78',
    padding: 40,
    width: '80vw'
  },

  field: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: '15px'
  },

  label: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Oswald'
  },

  input: {
    padding: '15px',
    borderRadius: '5px'
  }
}

const ToDoForm = ({ addToDo, title, dueDate, updateTitle, updateDueDate }) => {
  return (
    <form style={formStyle.formContainer}>
      <div style={formStyle.field}>
        <label style={formStyle.label}> Title </label>
        <input type='text' value={title} onChange={updateTitle} style={formStyle.input} />
      </div>

      <div style={formStyle.field}>
        <label style={formStyle.label}> Due Date </label>
        <input type='date' value={dueDate} onChange={updateDueDate} style={formStyle.input} />
      </div>
      <div>
        <button onClick={addToDo}>Submit</button>
      </div>
    </form>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateDueDate: PropTypes.func.isRequired

}

export default ToDoForm
