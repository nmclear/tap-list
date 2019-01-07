import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation resetTaplist($phone: ID) {
    resetTaplist(phone: $phone) {
      phone
      taplist {
        id
        name
      }
    }
  }
`;

const props = ({ mutate }) => {
  const resetTaplist = phone => mutate({ variables: { phone } });

  return { resetTaplist };
};

export default graphql(mutation, { props });
