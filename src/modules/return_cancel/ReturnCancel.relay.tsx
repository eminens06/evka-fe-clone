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
