import { gql } from 'apollo-boost';

// export default gql`
//   query {
//     activeKey @client
//   }
// `;

export default gql`
  mutation updateActiveKey($activeKey: String) {
    updateActiveKey(activeKey: $activeKey) @client
  }
`;
