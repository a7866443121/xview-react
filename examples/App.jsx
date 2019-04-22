import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import router from './router/index';
import './app.scss';
import SideNav from './components/SideNav';
import MainHeader from './components/Header';
import Animated from './components/transition/transition';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      init: false
    };
  }
  componentDidMount () {
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
      <HashRouter>
        <React.Fragment>
          <MainHeader />
          <div className="container">
            <SideNav className="nav" />
            <section className="view">
              <Animated>
                  {router.map((v,i) => {
                    return <Route path={v.path} component= {v.component} key={i}/>
                  })}
              </Animated>
            </section>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}
