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
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (e) {
      throw e;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create(args);
    } catch (e) {
      throw e;
    }
  },
  updateTweet: async (_, { _id, ...args }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findByIdAndUpdate(_id, args, { new: true });
    } catch (e) {
      throw e;
    }
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Delete Success!',
      };
    } catch (err) {
      throw err;
    }
  },
};
