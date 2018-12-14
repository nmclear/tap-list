import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation createUser($phone: ID) {
    createUser(phone: $phone) {
      phone
      authStatus
    }
  }
`;

const props = ({ mutate }) => {
  const createNewUser = phone => mutate({ variables: { phone } });
  return { createNewUser };
};

export default graphql(mutation, { props });
