import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query {
    authStage @client
  }
`;

const props = ({ data: { authStage } }) => ({ authStage });

export default graphql(query, { props });
