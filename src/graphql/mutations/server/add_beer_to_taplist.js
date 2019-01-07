import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { AsyncStorage } from 'react-native';

const mutation = gql`
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

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
    return user;
  } catch (error) {
    return error;
  }
};

const props = (results) => {
  const { mutate } = results;
  let phone = '';
  getUser().then((res) => {
    phone = res;
  });
  const addBeerToTaplist = beer => mutate({ variables: { phone, beer } });
  return { addBeerToTaplist };
};

export default graphql(mutation, { props });
