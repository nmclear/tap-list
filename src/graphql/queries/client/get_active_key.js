import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query {
    activeKey @client
  }
`;

const props = ({ data: { activeKey } }) => ({ activeKey });

export default graphql(query, { props });
