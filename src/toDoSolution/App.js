
import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }
}
const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <ToDoContainer />
    </div>
  )
}

export default App
