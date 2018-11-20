import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import GrandPrincipeKanban from './grandPrincipeKanban';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <GrandPrincipeKanban />
      </Fragment>
    );
  }
}

export default App;
