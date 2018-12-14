import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation authorizeUser($phone: ID, $code: Int) {
    authorizeUser(phone: $phone, code: $code) {
      phone
      authStatus
    }
  }
`;

const props = ({ mutate }) => {
  const signInWithPhoneAndCode = ({ phone, code }) => mutate({ variables: { phone, code } });
  return { signInWithPhoneAndCode };
};

export default graphql(mutation, { props });
