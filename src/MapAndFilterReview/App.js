import React from 'react'
import Data from './Data'
import ClassInfo from './ClassInfo'

const App = () => {
  console.table(Data)
  return (
    <div>
      <div>
        {
          Data.map(item => {
            return (
              <div>
                <div>
                  {
                    Data.map(item => {
                      return (
                        <ClassInfo item={item} />
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          Data.filter(item => {
            return (
              item.cost === 0
            )
          }).map(item => {
            return <ClassInfo item={item} />
          })
        }
      </div>
      <div>
        {
          Data.filter(item => {
            return item.length === 1
          }).map(item => {
            return <ClassInfo item={item} />
          })
        }
      </div>
      <div>
        {
          Data.filter(item => {
            return item.instructor.split(' ')[0] === 'Professor'
          }).map(item => {
            return <ClassInfo item={item} />
          })
        }
      </div>
    </div>
  )
}

export default App
