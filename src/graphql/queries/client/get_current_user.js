import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query {
    currentUser @client
  }
`;

const props = ({ data: { currentUser } }) => ({ currentUser });

export default graphql(query, { props });
