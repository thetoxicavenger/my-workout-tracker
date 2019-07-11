import React, { Component } from 'react';
import Home from './pages/Home'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <div style={theme.layout.body}>
        <Home />
      </div>
    );
  }
}

export default App;
