import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());

app.use('/graphiql', graphiqlExpress({
  endpointURL: constants.GRAPHQL_PATH,
}));

app.use(constants.GRAPHQL_PATH, graphqlExpress({
  schema,
}));

app.listen(constants.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen on port: ${constants.PORT}`);
  }
});
