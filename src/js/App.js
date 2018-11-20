import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
