import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation updateAuthStage($authStage: String) {
    updateAuthStage(authStage: $authStage) @client
  }
`;

const props = ({ mutate }) => {
  const onAuthStageChange = authStage => mutate({ variables: { authStage } });
  return { onAuthStageChange };
};

export default graphql(mutation, { props });
