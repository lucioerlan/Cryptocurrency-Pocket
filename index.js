import { AppRegistry, YellowBox } from 'react-native';
import SplashScreen from './src/components/SplashScreen';
import IntroSlider from './src/components/IntroSlider';
import { name as appName } from './app.json';
import React, { Component } from 'react';

YellowBox.ignoreWarnings(['Animated']);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'IntroSlider' };
    setTimeout(() => {
      this.setState({ currentScreen: 'SplashScreen' });
    }, 2000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen =
      currentScreen === 'IntroSlider' ? <IntroSlider /> : <SplashScreen />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);
