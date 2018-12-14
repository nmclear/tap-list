import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query {
    currentSwipeIndex @client
  }
`;

const props = ({ data: { currentSwipeIndex } }) => ({ currentSwipeIndex });

export default graphql(query, { props });
