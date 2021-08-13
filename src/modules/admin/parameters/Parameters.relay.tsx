import { graphql } from 'relay-hooks';

graphql`
  mutation ParametersRelayCreateMutation($input: SystemParamMutationInput!) {
    systemParamUpdateCreateMutation(input: $input) {
      systemParam {
        id
        metalParams
        woodParams
        laborParams
        otherWorkshopParams
        otherParams
      }
    }
  }
`;
