import React from 'react'
import Video from '../Video/Video'
import styles from './AddEntry.css'
import {GeoCoordinate} from 'geocoordinate'
import DevPanel from '../devPanel/DevPanel'

import store from '../../core/storage'
import Position from '../../core/Position'

export default class AddEntry extends React.Component{

  constructor(props){
    super(props)
  }

  onMessageChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <div className={styles.container}>
        <textarea className={styles.message} name='message'></textarea>
        <button className={styles.button}>Add message</button>
      </div>
    )
  }
}