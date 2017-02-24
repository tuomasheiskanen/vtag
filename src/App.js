'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/Menu/Menu'
import styles from './App.css'
import Viewport from './core/Viewport'

export default class App extends React.Component{
  
  constructor(props){
    super(props)
    const viewport = Viewport.getViewport()
    this.state = {
      viewport 
    }
  }

  render(){
    return (
      <div className={styles.container}>
        <Menu viewport={this.state.viewport} />
      </div>
    )
  }
}

