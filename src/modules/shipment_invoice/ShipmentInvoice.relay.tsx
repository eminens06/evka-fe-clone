import { graphql } from 'relay-hooks';

graphql`
  query ShipmentInvoiceRelayInvoiceQuery {
    allUserOrders(byInvoiceStatus: "R") {
      edges {
        node {
          id
          notes
          orderType
          shipmentType
          shipmentCompanyName
          customerInfo
          marketplaceOrderId
          marketplace {
            name
          }
          products {
            edges {
              node {
                price
                product {
                  name
                  id
                  sku
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
  query ShipmentInvoiceRelayGetAllUserOrdersQuery($status: String) {
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
  mutation ShipmentInvoiceRelayStatusChangeMutation(
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
  mutation ShipmentInvoiceRelayAddCargoNoMutation(
    $input: AddCargoChaseNumberInput!
  ) {
    addCargoChaseNumber(input: $input) {
      userOrder {
        id
      }
    }
  }
`;

graphql`
  mutation ShipmentInvoiceRelayAddCargoPriceMutation(
    $input: AddCargoPriceInput!
  ) {
    addCargoPrice(input: $input) {
      userOrder {
        id
      }
    }
  }
`;

graphql`
  query ShipmentInvoiceRelaySummaryQuery {
    allUserOrders(byOrderStatus: "S") {
      edges {
        node {
          id
          notes
          orderType
          shipmentType
          shipmentCompanyName
          customerInfo
          shipmentStatus
          invoiceStatus
          marketplaceOrderId
          estimatedDeliveryDate
          marketplace {
            name
          }
          products {
            edges {
              node {
                product {
                  name
                  id
                  sku
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
  mutation ShipmentInvoiceRelayInvoiceMutation($input: InvoiceMutationInput!) {
    invoiceMutation(input: $input) {
      userOrder {
        id
        invoiceStatus
      }
    }
  }
`;
