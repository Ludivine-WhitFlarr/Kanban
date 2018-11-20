import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import Pratique from './pratique';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <Pratique />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
