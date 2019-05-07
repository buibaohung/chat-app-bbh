import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import reduxStore from "./reduxStore";
import Root from "./router";

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Root />
      </Provider>
    );
  }
}

export default App;
