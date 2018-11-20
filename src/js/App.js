import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
      </Fragment>
    );
  }
}

export default App;
