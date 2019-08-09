import React, { Component } from 'react';
import classes from './App.css';
import Auxi from './hoc/Auxi/Auxi';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Auxi>
        <Layout>
          <div className={classes.App}>
            YOURAPP
          </div>
        </Layout>
      </Auxi>
    );
  }
}


export default App;