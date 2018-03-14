/* eslint-disable no-param-reassign */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import reducers from './reducers';
import { navMiddleware } from './navigations';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

networkInterface.use([{
  async applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    try {
      const token = await AsyncStorage.getItem('@tweeterclone');
      if (token != null) {
        req.options.headers.authorization = `Something ${token}`;
      } else {
        req.options.headers.authorization = null;
      }
    } catch (err) {
      throw err;
    }
    return next();
  }
}])

export const client = new ApolloClient({
  networkInterface,
});

const middlewares = [client.middleware(), thunk, navMiddleware];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
