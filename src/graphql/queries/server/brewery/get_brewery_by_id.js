// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';

export default gql`
  query GetBrewery($id: ID!) {
    brewery(id: $id) {
      id
      name
      bio
      beers {
        id
        name
        genre
        description
        link
        uri
        rating
      }
    }
  }
`;
