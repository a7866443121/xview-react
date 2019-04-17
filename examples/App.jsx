import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import router from './router/index';
import './app.scss';
import SideNav from './components/SideNav';
import MainHeader from './components/Header';
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
                <Switch>
                  {router.map((v,i) => {
                    return <Route path={v.path} component= {v.component} key={i}/>
                  })}
                </Switch>
            </section>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}
