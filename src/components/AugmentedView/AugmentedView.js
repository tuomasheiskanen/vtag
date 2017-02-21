import React from 'react'
import Video from '../Video/Video'
import styles from './AugmentedView.css'
import {GeoCoordinate} from 'geocoordinate'
import DevPanel from '../devPanel/DevPanel'

import store from '../../core/storage'
import Position from '../../core/Position'

export default class AugmentedView extends React.Component{

  constructor(props){
    super(props)  
    this.state = {
      message: '',
      entries: store.getEntries() || []
    }

    store.addListener(entry => this.storeChangeListener(entry))
    this.position = new Position()
    this.position.addListener((pos) => this.onGeoPositionChange(pos))
    this.triggerDistanceInMeters = 10000    
  }

  onGeoPositionChange(pos){
    const {latitude, longitude} = pos.coords
    const currentCoord = new GeoCoordinate(latitude, longitude)

    console.log('onGeoPositionChange fired')
    console.log(this.state)
    this.setState({lat:latitude, lon:longitude})

    this.state.entries.map(e => {
      const coord = new GeoCoordinate(Number(e.lat), Number(e.lon))
      const distance = currentCoord.distanceTo(coord)
      this.setState({isClose: distance < this.triggerDistanceInMeters})
      console.log(distance)
    })

  }

  storeChangeListener(entries){
    console.log('add entry..')
    this.setState({entries})
  }

  onMessageChange(e){
    this.setState({message: e.target.value})
  }

  addEntry(){
    const entry = {
      lat: this.state.lat,
      lon: this.state.lon,
      message: this.state.message
    }
    store.addEntry(entry)
  }

  setCurrentCoordinates(lat,lon){
    this.setState({lat,lon})
  }

  render(){
    return (
      <div>
        <div className={styles.container}>
          {this.state.isClose ? <div>SOMETHING CLOSE BY</div> : undefined}
          <div>
            <Video />
          </div>        
          <div>
            <textarea onChange={e => this.onMessageChange(e)} className={styles.geoText} type='text' value={this.state.message}/  >
            <button onClick={e => this.addEntry(e)}>Tag!</button>
          </div>
        </div>
        <div className={styles.container}>
          <DevPanel setCurrentCoordinates={(lat,lon) => this.setCurrentCoordinates(lat,lon)} />
        </div>
      </div>
    )
  }
}