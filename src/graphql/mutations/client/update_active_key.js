import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation updateActiveKey($activeKey: String) {
    updateActiveKey(activeKey: $activeKey) @client
  }
`;

const props = ({ mutate }) => {
  const onSceneChange = activeKey => mutate({ variables: { activeKey } });
  return { onSceneChange };
};

export default graphql(mutation, { props });
