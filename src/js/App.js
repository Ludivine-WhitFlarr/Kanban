import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import WhatKanban from './WhatKanban';
import GrandPrincipeKanban from './grandPrincipeKanban';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <WhatKanban />
        <GrandPrincipeKanban />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
