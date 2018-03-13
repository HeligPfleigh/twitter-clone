import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { navMiddleware } from './navigations';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

export const client = new ApolloClient({
  networkInterface,
});

const middlewares = [client.middleware(), thunk, navMiddleware];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
