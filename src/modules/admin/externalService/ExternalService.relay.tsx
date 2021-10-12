import { graphql } from 'relay-hooks';

graphql`
  query ExternalServiceRelayGetExternalServiceQuery(
    $search: String
    $byModuleName: String
  ) {
    allExternalServices(superSearch: $search, byModuleName: $byModuleName) {
      edges {
        node {
          id
          name
          phoneNumber
          address
          module
          isRawMaterial
          submodule
        }
      }
    }
  }
`;

graphql`
  mutation ExternalServiceRelayCreateExternalServiceMutation(
    $input: CreateExternalServiceInput!
  ) {
    createExternalService(input: $input) {
      externalService {
        name
        phoneNumber
        module
        address
        isRawMaterial
      }
    }
  }
`;

graphql`
  mutation ExternalServiceRelayUpdateExternalServiceMutation(
    $input: UpdateExternalServiceInput!
  ) {
    updateExternalService(input: $input) {
      externalService {
        id
        name
        phoneNumber
        module
        address
      }
    }
  }
`;

graphql`
  mutation ExternalServiceRelayDeleteExternalServiceMutation(
    $input: DeleteExternalServiceMutationInput!
  ) {
    deleteExternalService(input: $input) {
      deletedId
    }
  }
`;
