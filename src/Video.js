'use strict'
import React from 'react'

navigator.getUserMedia = ( 
          navigator.getUserMedia 
          || navigator.webkitGetUserMedia 
          || navigator.mozGetUserMedia 
          || navigator.msGetUserMedia);

export default React.createClass({

  getInitialState() {
    return {
      videoOptions: {
        video: true, 
        audio: false
      }
    };
  },

  componentWillMount() {
    navigator.getUserMedia(this.state.videoOptions, this.onSetupVideoStream, this.onVideoFail);
  },

  onSetupVideoStream(localMediaStream){
    var state = Object.assign({}, this.state);
    state.videoOptions.streamSrc = window.URL.createObjectURL(localMediaStream);
    this.setState(state);
  },

  onVideoFail(e) {
    console.log('Failed to open video - perhaps rejected by the user!', e);
  },

  onVideoLoadedMetaData(e){
    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
  },

  render() {
    const {streamSrc, onVideoLoadedMetaData} = this.state.videoOptions;

    const videoStyle = {
      height: '200px',
      // width: '100px',
      float: 'left'
    };

    return(
      <div>
        <video style={videoStyle} src={streamSrc} onloadedmetadata={onVideoLoadedMetaData} autoPlay></video>
      </div>
    );
  }
});

