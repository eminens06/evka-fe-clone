import { graphql } from 'relay-hooks';
graphql`
  query ProductionRelaySummaryQuery {
    allProductByProductOrderStatus(statusType: "P") {
      edges {
        node {
          id
          ayakStatus
          tablaStatus
          fabricStatus
          marbleStatus
          glassStatus
          orderCount
          product {
            id
            name
          }
          userOrder {
            edges {
              node {
                marketplaceOrderId
                marketplace {
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

graphql`
  query ProductionRelayWorkshopQuery($workshopType: String) {
    allProductOrders(byWorkshopType: $workshopType) {
      edges {
        node {
          id
          woodStatus
          metalStatus
          tablaStatus
          ayakStatus
          fabricStatus
          marbleStatus
          glassStatus
          orderCount
          product {
            id
            sku
            name
            width
            height
            length
            metaProducts {
              edges {
                node {
                  categoryName
                  materialName
                  metaType
                }
              }
            }
          }
          userOrder {
            edges {
              node {
                marketplaceOrderId
                marketplace {
                  name
                }
              }
            }
          }
          externalService {
            edges {
              node {
                name
                phoneNumber
                address
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  mutation ProductionRelayWorkshopStatusChangeMutation(
    $input: ChangeOrderStatusesInput!
  ) {
    changeOrderStatuses(input: $input) {
      productOrder {
        id
        woodStatus
        metalStatus
        marbleStatus
      }
    }
  }
`;

graphql`
  mutation ProductionRelayResendToProductionMutation(
    $input: SendReceivedProductToProductionInput!
  ) {
    sendReceivedProductToProduction(input: $input) {
      productOrder {
        id
        woodStatus
        metalStatus
        marbleStatus
      }
    }
  }
`;
