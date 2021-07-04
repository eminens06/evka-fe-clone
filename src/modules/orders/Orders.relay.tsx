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
    allUserOrders {
      edges {
        node {
          notes
          id
          totalPrice
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
                product {
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
