import React, { Component } from "react";
import { Route } from 'react-router';

import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Sound from "./components/Sound";
import List from "./components/List";
import Layout from "./layouts/Layout";
class App extends Component {
  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Sound' component={Sound} />
        <Route path='/List' component={List} />
      </Layout>
    );
  }
}

export default App;
