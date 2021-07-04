import { graphql } from 'relay-hooks';

graphql`
  query MarketplaceRelayGetMarketplacesQuery($search: String) {
    allMarketplaces(superSearch: $search) {
      edges {
        node {
          id
          name
          commissionRate
          deliveryDate
        }
      }
    }
  }
`;

graphql`
  mutation MarketplaceRelayCreateMarketplaceMutation(
    $input: CreateMarketplaceMutationInput!
  ) {
    createMarketplace(input: $input) {
      marketplace {
        id
        name
        commissionRate
        deliveryDate
      }
    }
  }
`;

graphql`
  mutation MarketplaceRelayUpdateMarketplaceMutation(
    $input: UpdateMarketPlaceMutationInput!
  ) {
    updateMarketplace(input: $input) {
      marketplace {
        id
        name
        commissionRate
        deliveryDate
      }
    }
  }
`;

graphql`
  mutation MarketplaceRelayDeleteMarketplaceMutation(
    $input: DeleteMarketplaceMutationInput!
  ) {
    deleteMarketplace(input: $input) {
      deletedId
    }
  }
`;
