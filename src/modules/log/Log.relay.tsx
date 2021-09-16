import { graphql } from 'react-relay';

graphql`
  query LogRelayGetOrderHistoryQuery($id: String) {
    allUserOrderHistories(byUserOrderId: $id) {
      edges {
        node {
          id
          updatedDate
          oldStatus
          newStatus
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

graphql`
  query LogRelayGetProductHistoryQuery($id: String) {
    allProductOrderHistories(byUserOrderId: $id) {
      edges {
        node {
          updatedDate
          oldStatus
          newStatus
          user {
            firstName
            lastName
          }
          productOrder {
            product {
              name
            }
          }
          module
          type
        }
      }
    }
  }
`;

graphql`
  query LogRelayGetOrderListQuery($search: String) {
    allUserOrders(superSearch: $search) {
      edges {
        node {
          id
          orderType
          orderDate
          commissionRate
          completedDate
          orderStatus
          notes
          totalPrice
          customerInfo
          orderStatus
          marketplaceOrderId
          invoiceDate
          invoiceNo
          isKdvInclude
          shipmentOrderDate
          cargoChaseNumber
          marketplace {
            name
          }
          products {
            edges {
              node {
                product {
                  sku
                  name
                  metaInfo
                }
                externalService {
                  edges {
                    node {
                      name
                      isRawMaterial
                      module
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
