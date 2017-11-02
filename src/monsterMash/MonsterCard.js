import React from 'react'
import PropTypes from 'prop-types'

const MonsterCard = ({ monsters }) => {
  return (
    <div className='monsterCard'>
      <h1> { monsters.name } </h1>
      {
        monsters.diet.map((food) => {
          return <p>{ food }</p>
        })
      }
      <img src={monsters.img} />
    </div>
  )
}

MonsterCard.propTypes = {
  monsters: PropTypes.object.isRequired
}
export default MonsterCard
