import { graphql } from 'relay-hooks';

graphql`
  query UsersRelayGetAllUsersQuery {
    allAppUsers {
      edges {
        node {
          roles
          firstName
          lastName
          id
          email
        }
      }
    }
  }
`;
