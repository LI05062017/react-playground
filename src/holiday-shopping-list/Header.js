import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red'
  }
}
const Header = () => 
  <div style={headerStyle.container}>
    <h3> My Holiday Shopping List </h3>
    <p> Helping kepp track of my gifts</p>
  </div>

export default Header
