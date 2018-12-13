import { gql } from 'apollo-boost';

export default gql`
  query user($phone: ID!) {
    user(phone: $phone) {
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
