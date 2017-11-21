import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const styles = {
  container: {
    backgroundColor: '#ecf0f1',
    width: '50%',
    color: '#3498db',
    border: 'solid 3px #9b59b6',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
const ToDoList = ({ toDos, title, markComplete, deleteToDo }) =>
  <div style={styles.container}>
    <h3>{title}</h3>
    {
      toDos.length > 0
        ? toDos.map(toDo =>
          <ToDo
            title={toDo.title}
            dueDate={toDo.dueDate}
            complete={toDo.complete}
            id={toDo.id}
            markComplete={markComplete}
            deleteToDo={deleteToDo}
          />
        )
        : 'No toDos'
    }
  </div>

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired
}

export default ToDoList
