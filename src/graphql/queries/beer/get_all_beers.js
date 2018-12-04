import { gql } from 'apollo-boost';

export default gql`
  {
    beers {
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
