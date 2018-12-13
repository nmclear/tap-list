import { gql } from 'apollo-boost';

export default gql`
  mutation updateAuthStage($authStage: String) {
    updateAuthStage(authStage: $authStage) @client
  }
`;
