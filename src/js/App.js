import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import WhatKanban from './WhatKanban';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <WhatKanban />
      </Fragment>
    );
  }
}

export default App;
