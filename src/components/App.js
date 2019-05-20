import React, { Component } from 'react'

import TabPointing from './tabs/TabPointing'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TabPointing">
          <TabPointing />
        </div>
      </div>
    )
  }
}

export default App;