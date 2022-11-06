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
            sku
            productName
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
                        
                        externalUrl
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

graphql`
  query ManagementProductionRelayStorageItemsQuery($sku: String) {
    storageItems(isProductExist: $sku) {
      edges {
        node {
          id
          location
          count
          missingParts
          product {
            name
            id
          }
        }
      }
    }
  }
`;
