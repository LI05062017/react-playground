import React from 'react'
import ToDo from './ToDo'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '2px solid black',
    width: 'calc(50% - 10px)',
    Margin: 5
  }
}
const ToDoList = ({toDos, title, markComplete}) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {
        toDos.length > 0
          ? toDos.map(toDo => {
            return <ToDo
              title={toDo.title}
              dueDate={toDo.dueDate}
              complete={toDo.complete}
              id={toDo.id}
              markComplete={markComplete}
            />
          })
          : 'No toDos'
      }
    </div>
  )
}

ToDoList.PropTypes = {
  toDos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default ToDoList
