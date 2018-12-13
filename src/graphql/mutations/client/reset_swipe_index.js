import { gql } from 'apollo-boost';

export default gql`
  mutation resetSwipeIndex {
    resetSwipeIndex @client
  }
`;
