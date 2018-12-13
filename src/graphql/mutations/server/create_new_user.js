import { gql } from 'apollo-boost';

export default gql`
  mutation createUser($phone: ID) {
    createUser(phone: $phone) {
      phone
      authStatus
    }
  }
`;
