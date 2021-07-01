import { graphql } from 'relay-hooks';

graphql`
  query OrdersRelayGetAllUserOrdersQuery {
    allUserOrders {
      edges {
        node {
          id
          marketplace {
            name
          }
          customerInfo
          marketplaceOrderId
          orderStatus
        }
      }
    }
  }
`;
