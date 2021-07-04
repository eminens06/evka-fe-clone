import { graphql } from 'relay-hooks';

graphql`
  query OrdersRelayGetAllUserOrdersQuery {
    allUserOrders {
      edges {
        node {
          notes
          id
          totalPrice
          marketplace {
            name
          }
          customerInfo
          marketplaceOrderId
          orderStatus
          products {
            edges {
              node {
                orderCount
                product {
                  name
                  productName
                  metaInfo
                }
              }
            }
          }
        }
      }
    }
  }
`;
