// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import '../packages/theme-default/lib/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'


const render = Component => {
  ReactDOM.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
    document.getElementById('app')
  )
}

render(App)