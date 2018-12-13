import { gql } from 'apollo-boost';

export default gql`
  mutation updateUser($phone: String, $taplist: List) {
    updateUser(phone: $phone, taplist: $taplist) {
      phone
      taplist {
        id
        name
        genre
        description
        rating
        link
        uri
        brewery {
          id
          name
          bio
        }
      }
    }
  }
`;
