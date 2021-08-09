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
          shipmentType
          shipmentCompanyName
          cargoChaseNumber
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

graphql`
  mutation ShipmentRelayAddCargoNoMutation($input: AddCargoChaseNumberInput!) {
    addCargoChaseNumber(input: $input) {
      userOrder {
        id
      }
    }
  }
`;

graphql`
  mutation ShipmentRelayAddCargoPriceMutation($input: AddCargoPriceInput!) {
    addCargoPrice(input: $input) {
      userOrder {
        id
      }
    }
  }
`;
