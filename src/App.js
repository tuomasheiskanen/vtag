'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Video from './video';

export default React.createClass({
  render: () => {

    return ( 
      <div>
      {
        [...Array(10)].map((x) => { return <Video /> })
      }
      </div>);
  }
});

