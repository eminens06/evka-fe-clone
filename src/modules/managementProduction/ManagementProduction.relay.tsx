import { graphql } from 'relay-hooks';

graphql`
  query ManagementProductionRelayallProductOrdersQuery {
    allProductOrders {
      edges {
        node {
          product {
            name
            productName
            metaProducts {
              edges {
                node {
                  categoryName
                  materialName
                }
              }
            }
          }
          userorderSet {
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
