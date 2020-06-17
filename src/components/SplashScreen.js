import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from '../Store';
import CryptoContainer from './CryptoContainer';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}