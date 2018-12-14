import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
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

const props = ({ data }) => {
  const { beers, loading, error } = data;
  if (loading) return { loading, error };
  return { beers, loading, error };
};

export default graphql(query, { props });
