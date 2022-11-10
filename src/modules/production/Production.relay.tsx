import { graphql } from 'relay-hooks';
graphql`
  query ProductionRelaySummaryQuery($search: String) {
    allProductByProductOrderStatus(statusType: "P", superSearch: $search) {
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
  query ProductionRelayWorkshopQuery($workshopType: String, $search: String) {
    allProductOrders(byWorkshopType: $workshopType, superSearch: $search) {
      edges {
        node {
          id
          tablaStatus
          ayakStatus
          fabricStatus
          marbleStatus
          glassStatus
          ayakPaintStatus
          tablaPaintStatus
          orderCount
          notes
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
                  paintType
                }
              }
            }
            productImages {
              edges {
                node {
                  images {
                    edges {
                      node {
                        id
                        name
                        height
                        width
                        externalUrl
                      }
                    }
                  }
                }
              }
            }
          }
          userOrder {
            edges {
              node {
                orderType
                marketplaceOrderId
                estimatedDeliveryDate
                marketplace {
                  name
                }
              }
            }
          }
          externalService {
            edges {
              node {
                isRawMaterial
                name
                phoneNumber
                address
                module
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
      }
    }
  }
`;
