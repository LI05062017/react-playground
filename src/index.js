import React from 'react'
import ReactDOM from 'react-dom'

// import App from '.webApp/App'
//import App from './acmeApp/App'
//import MonsterApp from './monsterMash/monsterApp'
//import data from './acmeApp/data'
//import SmartApp from './smartApp/App'
//import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
import ChatterApp from './ChatterApp/ChatterApp'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<ChatterApp />, document.getElementById('root'))
registerServiceWorker()
