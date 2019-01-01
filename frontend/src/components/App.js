import React, { Component } from 'react';

import Header from './Header';
import LinkList from './LinkList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LinkList />
      </React.Fragment>
    )

  }
}

export default App;
