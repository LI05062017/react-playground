import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    width: '50%'
  }
}

const ClassInfo = ({item}) => {
  return (
    <div style={styles.container}>
      <h3>{item.name} </h3>
      <h3>{item.cost} </h3>
      <h3>{item.length}</h3>
    </div>
  )
}
ClassInfo.propTypes = {
  item: PropTypes.object.isRequired
}
export default ClassInfo
