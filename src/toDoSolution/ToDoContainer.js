import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

const list = {
  container: {
    display: 'flex'

  }
}

class ToDoContainer extends Component {
state = {
  toDos: [],
  title: undefined,
  dueDate: undefined,
  completed: [],
  incomplete: []
}
componentDidMount () {
  const toDos = JSON.parse(localStorage.getItem('toDos')) || []
  console.log(toDos, 'localStorage tools')
  this.setState({ toDos: toDos })
  setTimeout(() => {
    this.sortByCompleted()
  }, 3000)
}
// this.setState is A-sync (top => down)
addToDo = (e) => {
  e.preventDefault()
  const allToDo = this.state.toDos || []
  if (this.state.title && this.state.dueDate) {
    const newToDo = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      complete: false,
      id: this.state.toDos
        ? this.state.toDos.length + 1
        : 1
    }
    allToDo.push(newToDo)
    this.setState({toDos: allToDo})
    this.sortByCompleted()
    localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
    alert('This item has been added!')
    this.setState({title: ' '})
    this.setState({dueDate: ' '})
  } else {
    alert('Cannot have title or Due Date')
  }
}

sortByCompleted = () => {
  console.log(this.state.toDos)
  const completed = this.state.toDos
    ? this.state.toDos.filter(item => item.complete)
    : []
  const incomplete = this.state.toDos
    ? this.state.toDos.filter(item => !item.complete)
    : []
  this.setState({completed: completed, incomplete: incomplete})
}

updateTitle = (e) => {
  this.setState({title: e.target.value})
}

updateDueDate = (e) => {
  this.setState({dueDate: e.target.value})
}

markComplete = (e) => {
  const theToDo = this.state.toDos.find(item => {
    return Number(e.target.id) === Number(item.id)
  })
  console.log(theToDo)
  theToDo.complete = !theToDo.complete
  this.sortByCompleted()
}

resetToDos = () => {
  this.setState({ toDos: [], complete: [], incomplete: [] })
  localStorage.clear()
  this.sortByCompleted()
}

deleteToDo = (e) => {
  const theToDo = this.state.toDos.find(item => {
    return Number(e.target.id) === Number(item.id)
  })
  console.log(theToDo)
  const newArray = this.state.toDos.filter(item => {
    return item.id !== theToDo.id
  })
  console.log(newArray)
  this.setState({ toDos: newArray })
  localStorage.setItem('toDo', JSON.stringify(newArray))
  setTimeout(() => {
    this.sortByCompleted()
  }, 3000)
}

render () {
  return (
    <div>
      <p> From ToDo Container </p>
      <div style={list.container}>
        {
          this.state.toDos
            ? (
              <div style={list.container}>
                <ToDoList
                  toDos={this.state.complete}
                  markComplete={this.markComplete}
                  deleteToDo={this.deleteToDo}
                  title='completed toDos' />
                <ToDoList
                  toDos={this.state.incomplete}
                  markCompelete={this.markComplete}
                  deleteToDo={this.deleteToDo}
                  title='incomplete toDos' />
              </div>
            )
            : 'No to Dos'
        }
      </div>
      <ToDoForm
        addToDo={this.addToDo}
        title={this.state.title}
        dueDate={this.state.dueDate}
        updateTitle={this.updateTitle}
        updateDueDate={this.updateDueDate}
      />
      <button onClick={this.resetToDos} type='button'>Reset To Do List</button>
    </div>
  )
}
}

export default ToDoContainer
