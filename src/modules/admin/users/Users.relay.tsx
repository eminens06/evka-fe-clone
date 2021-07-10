import { graphql } from 'relay-hooks';

graphql`
  query UsersRelayGetAllUsersQuery($search: String) {
    allAppUsers(superSearch: $search) {
      edges {
        node {
          roles
          firstName
          lastName
          id
          email
          password
        }
      }
    }
  }
`;

graphql`
  mutation UsersRelayCreateUserMutation($input: CreateAppUserMutationInput!) {
    createUser(input: $input) {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

graphql`
  mutation UsersRelayUpdateUserMutation($input: UpdateAppUserMutationInput!) {
    updateUser(input: $input) {
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

graphql`
  mutation UsersRelayDeleteMarketplaceMutation(
    $input: DeleteAppUserMutationInput!
  ) {
    deleteUser(input: $input) {
      deletedUserId
    }
  }
`;
