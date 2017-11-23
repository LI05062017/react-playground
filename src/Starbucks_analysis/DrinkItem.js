import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    borderBottom: '1px dotted black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: '10px'
  },
  innerDiv: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'left'
  },
  text: {
    padding: '0px',
    margin: '0px'
  }
}

const DrinkCard = ({item}) => {
  return (
    <div style={styles.container} >
      <div style={styles.innerDiv}>
        <h3 style={styles.text}>{item.beverageName}</h3>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{item.category}</p>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{item.beveragePrep}</p>
      </div>
    </div>
  )
}

// DrinkCard.propTypes = {
//   drink: PropTypes.object.isRequired
// }

// const DrinkItem = ({item}) =>
//   <div>
//     <p>{item.beverageName}</p>
//     <p>{item.beveragePrep}</p>
//     <p>{item.catagory}</p>
//     <p>{item.caffeine}</p>
//   </div>

DrinkCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default DrinkCard
