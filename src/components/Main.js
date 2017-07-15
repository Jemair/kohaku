require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component} from 'react';

const background = require('../images/background.mp4');

class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <video src={background} loop autoPlay></video>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
