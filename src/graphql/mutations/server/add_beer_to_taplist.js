import { gql } from 'apollo-boost';

export default gql`
  mutation addBeerToTaplist($phone: ID, $beer: String) {
    addBeerToTaplist(phone: $phone, beer: $beer) {
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
