import { graphql } from 'relay-hooks';
graphql`
  query ProductionRelaySummaryQuery {
    allProductByProductOrderStatus(statusType: "A") {
      edges {
        node {
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
      }
    }
  }
`;
