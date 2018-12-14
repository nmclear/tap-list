import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation resetSwipeIndex {
    resetSwipeIndex @client
  }
`;

const props = ({ mutate }) => {
  const resetSwipeIndex = () => mutate({});
  return { resetSwipeIndex };
};

export default graphql(mutation, { props });

// export default mutation;
