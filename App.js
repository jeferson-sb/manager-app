import React, { useEffect } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import firebaseConfig from './src/config/firebase';
import Routes from './src/routes';
import reducers from './src/reducers';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <StatusBar backgroundColor="#1e2d3b" />
      <Routes />
    </Provider>
  );
}
