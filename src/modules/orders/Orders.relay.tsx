import { graphql } from 'relay-hooks';

graphql`
  query OrdersAllMetaProductsQuery {
    allMetaProducts {
      edges {
        node {
          id
          categoryName
          materialName
          materialId
        }
      }
    }
  }
`;

graphql`
  query OrdersAllMarketplacesQuery {
    allMarketplaces {
      edges {
        node {
          id
          name
          commissionRate
          deliveryDate
        }
      }
    }
  }
`;

graphql`
  query OrdersAllProductsQuery($bySku: String) {
    allProducts(bySku: $bySku) {
      edges {
        node {
          id
          name
          sku
          metaProducts {
            edges {
              node {
                materialName
                type
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  query OrdersRelayGetAllUserOrdersQuery($search: String) {
    allUserOrders(notCompleted: "a", superSearch: $search) {
      edges {
        node {
          notes
          estimatedDeliveryDate
          id
          totalPrice
          orderType
          marketplace {
            name
          }
          customerInfo
          marketplaceOrderId
          orderStatus
          shipmentStatus
          products {
            edges {
              node {
                orderCount
                type
                notes
                productOrderStatus
                product {
                  sku
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

graphql`
  mutation OrdersCreateOrderMutation($input: CreateOrderMutationInput!) {
    createOrder(input: $input) {
      order {
        id
      }
    }
  }
`;

graphql`
  mutation OrdersUpdateOrderMutation($input: UpdateOrderMutationInput!) {
    updateOrder(input: $input) {
      order {
        id
      }
    }
  }
`;

graphql`
  query OrdersAllProductsWithoutSkuQuery($search: String) {
    allProducts(superSearch: $search) {
      edges {
        node {
          id
          name
          sku
          metaProducts {
            edges {
              node {
                materialName
                type
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  query OrdersGetUserOrderQuery($id: ID!) {
    userOrder(id: $id) {
      id
      products {
        edges {
          node {
            id
            orderCount
            price
            notes
            productOrderStatus
            product {
              id
              name
              productName
              sku
              metaProducts {
                edges {
                  node {
                    id
                    categoryName
                    materialName
                    materialId
                  }
                }
              }
            }
          }
        }
      }
      marketplace {
        id
        name
        commissionRate
        deliveryDate
      }
      orderDate
      totalPrice
      notes
      customerInfo
      commissionRate
      orderDeliveryTime
      marketplaceOrderId
      isKdvInclude
    }
  }
`;

graphql`
  mutation OrdersCancelOrderMutation($input: CancelOrderMutationInput!) {
    cancelOrderMutation(input: $input) {
      userOrder {
        id
        orderDate
      }
    }
  }
`;

graphql`
  mutation OrdersDeleteOrderMutation($input: DeleteUserOrderMutationInput!) {
    deleteUserOrder(input: $input) {
      deletedId
    }
  }
`;
