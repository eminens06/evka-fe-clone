import { graphql } from 'relay-runtime';

export default graphql`
  mutation SignInFormRelayMutation($input: ObtainJSONWebTokenInput!) {
    tokenAuth(input: $input) {
      token
      refreshToken
      user {
        firstName
        lastName
        email
        id
        roles
      }
    }
  }
`;
