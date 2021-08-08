import { graphql } from 'relay-hooks';

graphql`
  query ShipmentRelayGetAllUserOrdersQuery($status: String) {
    allUserOrders(byShipmentStatus: $status) {
      edges {
        node {
          id
          orderStatus
          marketplaceOrderId
          estimatedDeliveryDate
          customerInfo
          marketplace {
            name
          }
          products {
            edges {
              node {
                productOrderStatus
                product {
                  name
                  sku
                  width
                  length
                  height
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
  mutation ShipmentRelayStatusChangeMutation(
    $input: ChangeShipmentStatusInput!
  ) {
    changeShipmentStatus(input: $input) {
      userOrders {
        id
      }
    }
  }
`;
