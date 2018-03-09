import GraphQlDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';

export default {
  Date: GraphQlDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
  },
};
