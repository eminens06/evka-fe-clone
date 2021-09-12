import { graphql } from 'relay-hooks';

graphql`
  query ShipmentInvoiceRelayInvoiceQuery($search: String) {
    allUserOrders(byInvoiceStatus: "R", superSearch: $search) {
      edges {
        node {
          id
          notes
          orderType
          shipmentType
          shipmentOrderDate
          shipmentCompanyName
          customerInfo
          orderStatus
          marketplaceOrderId
          marketplace {
            name
          }
          products {
            edges {
              node {
                price
                productOrderStatus
                product {
                  name
                  id
                  sku
                  kdv
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
  query ShipmentInvoiceRelayGetAllUserOrdersQuery(
    $status: String
    $search: String
  ) {
    allUserOrders(byShipmentStatus: $status, superSearch: $search) {
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
                  kdv
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
  query ShipmentInvoiceRelayGetSystemParametersQuery {
    allSystemParams {
      edges {
        node {
          otherParams {
            kdv1
            kdv2
            kdv3
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
  query ShipmentInvoiceRelaySummaryQuery($search: String) {
    allUserOrders(byOrderStatus: "S", superSearch: $search) {
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
                productOrderStatus
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
