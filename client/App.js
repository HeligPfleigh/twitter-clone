import React from 'react';
import { AppLoading } from 'expo';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';
import { login } from './src/actions/user';

import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    appIsReady: false,
  }

  componentDidMount() {
    this._checkIfToken();
  }

  _checkIfToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@tweeterclone');
      if (token != null) {
        store.dispatch(login());
      }
    } catch (err) {
      throw err;
    }

    this.setState({ appIsReady: true })
  }

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />
    }
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
