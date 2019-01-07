import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation deleteUser($phone: ID!) {
    deleteUser(phone: $phone) {
      codeValid
    }
  }
`;

const props = ({ mutate }) => {
  const deleteUser = phone => mutate({ variables: { phone } });
  return { deleteUser };
};

export default graphql(mutation, { props });
