import React from 'react'
import Video from '../video/Video'
import styles from './DevPanel.css'
import store from '../../core/storage'
import {GeoCoordinate} from 'geocoordinate'

export default class DevPanel extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      entries: store.getEntries()
    }
  }

  componentWillMount(){
    this.applyCoordinates = this.applyCoordinates.bind(this)
    this.onCoordinateChange = this.onCoordinateChange.bind(this)
  }

  initGeoListener(){
  }

  applyCoordinates(){
    this.props.setCurrentCoordinates(this.state.lat, this.state.lon)
  }

  clearEntries(){
    store.clearEntries()
  }

  onCoordinateChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div >
        <div className="dev-panel-row">
          <span>Geo X</span>
          <input type="text" onChange={e => this.onCoordinateChange(e)} name="lat" />
        </div>
        <div className="dev-panel-row">
          <span>Geo Y</span>
          <input type="text" onChange={e => this.onCoordinateChange(e)} name="lon" />
        </div>
        <div className="dev-panel-row">
          <button className="dev-panel-button--apply" onClick={e => this.applyCoordinates(e)}>Apply</button>
          <button onClick={e => this.clearEntries(e)}>Clear entries</button>
        </div>
        <div className={styles.currentCoordinate}>
          Current coordinates: {`(${this.state.lat}, ${this.state.lon})`}
        </div>
      </div>
    )
  }

}
