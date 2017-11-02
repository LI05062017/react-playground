import React from 'react'
import MonsterCard from './MonsterCard'

const MonsterSection = ({ arr }) => {
  return (
    <div>
      {
        arr.map((monster) => {
          return <MonsterCard monsters={monster} />
        })
      }
    </div>
  )
}

export default MonsterSection
