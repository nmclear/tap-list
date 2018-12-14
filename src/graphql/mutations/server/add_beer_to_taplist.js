import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

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

const props = (results) => {
  // console.log(results);
  const { mutate } = results;
  // console.log(ownProps);
  const phone = '2314090332';
  const addBeerToTaplist = beer => mutate({ variables: { phone, beer } });
  return { addBeerToTaplist };
};

export default graphql(mutation, { props });
