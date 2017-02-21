'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Video from './components/video/Video';
import AugmentedView from './components/AugmentedView/AugmentedView'

const videos = [];

export default React.createClass({

  getInitialState(){
    return {
      videos: []
    }
  },

  add(){
    var state = Object.assign({}, this.state);
    state.videos.push(<Video key={state.videos.length} />);
    this.setState(state);
  },

  remove(){
    var state = Object.assign({}, this.state);
    state.videos.pop();
    this.setState(state);
  },

  render(){
    return (
      <div>
        <div onClick={this.add}>Upgrade</div>
        <div onClick={this.remove}>Downgrade</div>
        <div>
          <AugmentedView />
          // {this.state.videos}
        </div>
      </div>
    );
  }
});

