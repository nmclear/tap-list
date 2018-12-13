import { gql } from 'apollo-boost';

export default gql`
  mutation saveCurrentUser($currentUser: String) {
    saveCurrentUser(currentUser: $currentUser) @client
  }
`;
