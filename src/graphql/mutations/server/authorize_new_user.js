import { gql } from 'apollo-boost';

export default gql`
  mutation authorizeUser($phone: ID, $code: Int) {
    authorizeUser(phone: $phone, code: $code) {
      phone
      authStatus
    }
  }
`;
