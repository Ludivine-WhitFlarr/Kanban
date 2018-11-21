import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import WhatKanban from './WhatKanban';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <WhatKanban />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
