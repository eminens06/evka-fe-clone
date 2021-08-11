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
  query OrdersRelayGetAllUserOrdersQuery {
    allUserOrders(notCompleted: "") {
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
          products {
            edges {
              node {
                orderCount
                type
                notes
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
  query OrdersAllProductsWithoutSkuQuery {
    allProducts {
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
