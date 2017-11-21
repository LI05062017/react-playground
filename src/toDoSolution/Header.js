import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    background: 'grey',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    width: '80vw',
    padding: 20

  }
}

const Header = () => {
  return (
    <div style={headerStyle.jumbotron}>
      <h3> To Do List App </h3>
    </div>
  )
}

export default Header
