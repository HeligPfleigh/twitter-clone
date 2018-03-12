/* eslint no-underscore-dangle: 0 */
import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, {
    fullName, username, password, email, avatar,
  }) => {
    try {
      const [firstName, ...lastName] = fullName.split(' ');
      const user = await User.create({
        firstName, lastName, username, password, email, avatar,
      });
      return {
        token: user.createToken(),
      };
    } catch (e) {
      throw e;
    }
  },
  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not exist');
      }
      if (!user.authenticateUser(password)) {
        throw new Error('Password not match!');
      }
      return {
        token: user.createToken(),
      };
    } catch (e) {
      throw e;
    }
  },
  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);
      return me;
    } catch (e) {
      throw e;
    }
  },
};
