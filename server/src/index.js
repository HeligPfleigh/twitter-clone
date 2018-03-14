import express from 'express';

import './config/db';
import constants from './config/constants';
import mocks from './mocks';
import middlewares from './config/middlewares';

const app = express();

middlewares(app);

// mocks().then(() => {
  app.listen(constants.PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`App listen on port: ${constants.PORT}`);
    }
  });
// });

