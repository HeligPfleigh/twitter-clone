import { gql } from 'react-apollo';

export default gql`
  {
    getTweets{
      _id
      text
      user {
        username
        firstName
        lastName
        avatar
      }
      favoriteCount
      createdAt
      updatedAt
    }
  }
`;