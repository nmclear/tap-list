import BeerType from './beer_type';
import ActiveKeyType from './active_key_type';

// const typeDefs = {
//   BeerType,
//   ActiveKeyType,
// };
const typeDefs = `
    type Query {
        activeKey: String
    }
`;

export default typeDefs;
