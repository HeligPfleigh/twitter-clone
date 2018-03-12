import jwt from 'jsonwebtoken';

import constants from '../config/constants';

export default function decodeToken(token) {
  const arr = token.split(' ');

  if (arr[0] === 'Something') {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('Token is not valid!');
}
