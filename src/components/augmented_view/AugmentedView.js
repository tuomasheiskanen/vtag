import React from 'react'
import Video from '../video/video'
import styles from './AugmentedView.css'

export default React.createClass({
  render(){

    return (
        <div className={styles.container}>
          <Video />
        </div>
      )
  }
});