import { graphql } from 'relay-hooks';

graphql`
  query ManagementProductionRelayallProductOrdersQuery($search: String) {
    allProductByProductOrderStatus(statusType: "DF", superSearch: $search) {
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
                estimatedDeliveryDate
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

graphql`
  mutation ManagementProductionRelayExistInStorageMutation(
    $input: ExistInStorageInput!
  ) {
    existInStorage(input: $input) {
      productOrder {
        id
      }
    }
  }
`;
