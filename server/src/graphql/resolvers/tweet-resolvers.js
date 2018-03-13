/* eslint no-underscore-dangle: 0 */
import Tweet from '../../models/Tweet';
import { requireAuth } from '../../services/auth';

export default {
  getTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById(_id);
    } catch (e) {
      throw e;
    }
  },
  getTweets: async () => {
    try {
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (e) {
      throw e;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create({ ...args, user: user._id });
    } catch (e) {
      throw e;
    }
  },
  updateTweet: async (_, { _id, ...args }, { user }) => {
    try {
      await requireAuth(user);

      const tweet = await Tweet.findOne({ _id, user: user._id });
      if (!tweet) {
        throw new Error('Not found!');
      }

      Object.entries(args).forEach(([key, value]) => {
        tweet[key] = value;
      });

      return tweet.save();
    } catch (e) {
      throw e;
    }
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);

      const tweet = await Tweet.findOne({ _id, user: user._id });
      if (!tweet) {
        throw new Error('Not found!');
      }
      await tweet.remove();

      return {
        message: 'Delete Success!',
      };
    } catch (err) {
      throw err;
    }
  },
  getUserTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({ user: user._id }).sort({ createdAt: -1 });
    } catch (e) {
      throw e;
    }
  },
};
