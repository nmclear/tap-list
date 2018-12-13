import { gql } from 'apollo-boost';

export default gql`
  query {
    currentSwipeIndex @client
  }
`;
