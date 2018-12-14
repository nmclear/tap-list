import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
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

const props = ({ data }) => {
  const { loading, error, user } = data;
  if (loading || error) {
    return { loading, error };
  }
  const { taplist } = user;
  return { loading, error, taplist };
};

const options = () => ({
  variables: { phone: '2314090332' },
  fetchPolicy: 'cache-and-network',
  partialRefetch: true,
});

export default graphql(query, {
  options,
  props,
});
