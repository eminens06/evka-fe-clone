import { graphql } from 'relay-hooks';

graphql`
  query PackagingRelayallProductOrdersQuery($search: String) {
    allProductByProductOrderStatus(statusType: "PP", superSearch: $search) {
      edges {
        node {
          packagingStatus
          id
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
