import { graphql } from 'relay-hooks';

graphql`
  query PackagingRelayallProductOrdersQuery {
    allProductByProductOrderStatus(statusType: "PP") {
      edges {
        node {
          packagingStatus
          id
          product {
            name
            isCollectable
            packageCount
            isMonte
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
