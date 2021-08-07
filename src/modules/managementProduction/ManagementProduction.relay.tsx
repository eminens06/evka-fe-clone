import { graphql } from 'relay-hooks';

graphql`
  query ManagementProductionRelayallProductOrdersQuery {
    allProductByProductOrderStatus(statusType: "DF") {
      edges {
        node {
          notes
          orderCount
          id
          product {
            id
            name
            productName
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
                customerInfo
                orderType
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
  mutation ManagementProductionRelaySendttoProductionMutation(
    $input: SendToProductionInput!
  ) {
    sendToProduction(input: $input) {
      productOrder {
        id
      }
    }
  }
`;
