import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <footer />
      </Fragment>
    );
  }
}

export default App;
