import { gql } from 'apollo-boost';

export default gql`
  query {
    taplist @client {
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
`;
