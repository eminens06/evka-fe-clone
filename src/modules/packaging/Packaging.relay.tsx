import { graphql } from 'relay-hooks';

graphql`
  query PackagingRelayallProductOrdersQuery($search: String) {
    allProductByProductOrderStatus(statusType: "PP", superSearch: $search, getAll: true) {
      edges {
        node {
          packagingStatus
          id
          notes
          product {
            name
            isCollectable
            packageCount
            isMonte
            metaProducts {
              edges {
                node {
                  categoryName
                  materialName
                }
              }
            }
            productImages {
              edges {
                node {
                  images {
                    edges {
                      node {
                        id
                        name
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          userOrder {
            edges {
              node {
                estimatedDeliveryDate
                marketplaceOrderId
                marketplace {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  mutation PackagingRelayChangePackagingStatusMutation(
    $input: ChangePackagingStatusInput!
  ) {
    changePackagingStatus(input: $input) {
      productOrder {
        id
      }
    }
  }
`;

graphql`
  mutation PackagingRelayUpdatePackagingHakedisMutation(
    $input: UpdatePackagingHakedisInput!
  ) {
    updatePackagingHakedis(input: $input) {
      productOrder {
        id
      }
    }
  }
`;
