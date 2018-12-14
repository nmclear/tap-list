import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation saveCurrentUser($currentUser: String) {
    saveCurrentUser(currentUser: $currentUser) @client
  }
`;

const props = ({ mutate }) => {
  const saveCurrentUser = currentUser => mutate({ variables: { currentUser } });
  return { saveCurrentUser };
};

export default graphql(mutation, { props });
