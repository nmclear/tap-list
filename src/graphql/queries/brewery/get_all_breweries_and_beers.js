import gql from 'graphql-tag';

export default gql`
  query {
    breweries {
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
