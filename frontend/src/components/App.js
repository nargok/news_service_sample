import React, { Component } from 'react';

import Header from './Header';
import LinkList from './LinkList';
import Footer from './Footer';

import '../App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LinkList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
