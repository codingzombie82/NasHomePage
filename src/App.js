import React, { Component } from "react";
import { Route } from 'react-router';
import "./App.css";
import Home from "./components/Home";
import Layout from "./layouts/Layout";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Contact' component={Contact} />
      </Layout>
    );
  }
}

export default App;
