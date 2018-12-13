import { gql } from 'apollo-boost';

export default gql`
  mutation resetTaplist($phone: ID) {
    resetTaplist(phone: $phone) {
      phone
      taplist {
        id
        name
      }
    }
  }
`;
