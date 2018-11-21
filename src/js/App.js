import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import Pratique from './pratique';
import Dev_Kanban from './Dev_Kanban';
import WhatKanban from './WhatKanban';
import GrandPrincipeKanban from './grandPrincipeKanban';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <Pratique />
        <Dev_Kanban />
        <WhatKanban />
        <GrandPrincipeKanban />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
