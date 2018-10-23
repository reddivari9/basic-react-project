import React, { Component } from 'react';


import Router from './router';
import Error from './components/error';
import { FullpageLoader } from './components/loaders';

class App extends Component {

  state = {
    loading: true,
    timeout: null,
    error: false,
    errorMessage: ''
  }

  componentDidMount() {
    const timeout = setTimeout(() => {
      this.setState(state => ({
        loading: false
      }))
    }, 3000);

    this.setState(state => ({
      ...state,
      timeout
    }))
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout)
  }

  componentDidCatch(error, info) {
    this.setState(state => ({
      ...state,
      error: true,
      errorMessage: error
    }))
  }

  render() {
    if (this.state.loading)
      return <FullpageLoader show={this.state.loading} />

    if (this.state.error)
      return <Error message={this.state.errorMessage} />

    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
