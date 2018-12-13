import { gql } from 'apollo-boost';

export default gql`
  mutation updateCurrentSwipeIndex($currentSwipeIndex: String) {
    updateCurrentSwipeIndex(currentSwipeIndex: $currentSwipeIndex) @client
  }
`;
