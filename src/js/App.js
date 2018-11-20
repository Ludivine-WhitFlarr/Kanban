import React, { Component, Fragment } from 'react';
import Header from './header';
import SliderKanban from './Slider';
import Dev_Kanban from './Dev_Kanban';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SliderKanban />
        <Dev_Kanban />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
