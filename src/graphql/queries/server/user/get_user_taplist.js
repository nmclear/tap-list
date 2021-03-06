import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { AsyncStorage } from 'react-native';

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

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
    return user;
  } catch (error) {
    return error;
  }
};

let user = '';
getUser().then((res) => {
  user = res;
});

// const options = ({ initial }) => ({
//   variables: { phone: initial },
//   fetchPolicy: 'cache-and-network',
//   partialRefetch: true,
// });

const options = ({ initial }) => {
  const phone = initial || user;
  return {
    variables: { phone },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

export default graphql(query, {
  options,
  props,
});
