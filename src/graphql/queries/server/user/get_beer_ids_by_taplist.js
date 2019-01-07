import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { AsyncStorage } from 'react-native';

const query = gql`
  query getBeerIdsByTaplist($phone: ID!) {
    user(phone: $phone) {
      taplist {
        id
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

  const beerIds = taplist.map(beer => beer.id);
  return { taplist: beerIds };
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
