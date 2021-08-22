import { graphql } from 'relay-hooks';

graphql`
  query ReturnCancelRelayGetUserOrderQuery($id: String) {
    allUserOrders(byMarketplaceOrderIdStatus: $id) {
      edges {
        node {
          id
          marketplace {
            name
          }
          customerInfo
          products {
            edges {
              node {
                id
                orderCount
                price
                notes
                productOrderStatus
                product {
                  id
                  name
                  productName
                  sku
                  metaProducts {
                    edges {
                      node {
                        id
                        categoryName
                        materialName
                        materialId
                      }
                    }
                  }
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
  mutation ReturnCancelRelayCancelOrderMutation(
    $input: ReturnOrderMutationInput!
  ) {
    returnOrderMutation(input: $input) {
      userOrder {
        id
        isPartlyReturned
      }
    }
  }
`;

graphql`
  query ReturnCancelListOrdersQuery($search: String) {
    allUserOrders(returnCancelOrders: "a", superSearch: $search) {
      edges {
        node {
          id
          orderType
          marketplace {
            name
          }
          customerInfo
          marketplaceOrderId
          orderStatus
          isPartlyCanceled
          isPartlyReturned
          cancelNote
          returnNote
          products {
            edges {
              node {
                orderCount
                type
                notes
                productOrderStatus
                product {
                  sku
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
