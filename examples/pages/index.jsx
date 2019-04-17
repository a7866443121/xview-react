

import React, {Component,Fragment} from 'react';
import {Link } from 'react-router-dom';
import './index.scss';
export default class index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      height: document.documentElement.clientHeight
    };
  }
  render () {
    return (
      <Fragment>
        <div  className="pg-index">
          <div className="index-container">
            <img src="../../static/img/logo.png" />
            <p>一款轻量级、模块化的前端 UI 组件库</p>
          </div>
          <div className="separate-panel">
            <div className="about">
              <Link to="./giud">开始使用</Link>
              <a target="_blank" className="btn-github" href="https://github.com/a7866443121/xview">GitHub</a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
