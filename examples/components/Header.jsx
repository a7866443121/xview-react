import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    var pageName = location.hash;
    return (
      <Fragment>
        <div 
          className="page-header" 
          style={{boxShadow: pageName === 'index' ? 'none' : '0 10px 60px 0 rgba(29,29,31,0.07)'}}
        >
          <div className="header-container">
            <a href="./index'"><img src="./static/img/logo.png" width="100" /></a>
            <a href="./giud">组件</a>
          </div>
        </div>
      </Fragment>
    )
  }
}


