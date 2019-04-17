import React, { Component } from 'react';
import sideNav from './components/side-nav.vue';
import mainHeader from './components/header.vue';
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      init: false
    };
  }
  componentDidMount () {
    这里模拟数据请求;
    setTimeout(() => {
      this.setState({
        init: true 
      });
    }, 250);
    this.setState({
      init: true 
    });
  }
  render () {
    return (
      <div id="app">
        <mainHeader />
        <div className="container">
          <sideNav className="nav" />
          <router-view className="view" />
        </div>
      </div>
    );
  }
}
