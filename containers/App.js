import React, { Component } from 'react';
import SiteApp from './SiteApp';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { devTools, persistState } from 'redux-devtools';
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

 const finalCreateStore = compose(
   devTools(),
   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
   createStore
 );

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        {() => <SiteApp />}
        </Provider>
      </div>
    );
  }
}
