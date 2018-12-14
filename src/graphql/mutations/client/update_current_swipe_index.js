import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation updateCurrentSwipeIndex($currentSwipeIndex: String) {
    updateCurrentSwipeIndex(currentSwipeIndex: $currentSwipeIndex) @client
  }
`;

const props = ({ mutate }) => {
  const updateSwipeIndex = currentSwipeIndex => mutate({ variables: { currentSwipeIndex } });
  return { updateSwipeIndex };
};

export default graphql(mutation, { props });
