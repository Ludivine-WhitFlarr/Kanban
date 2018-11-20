import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import Pratique from './pratique';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <Pratique />
      </Fragment>
    );
  }
}

export default App;
