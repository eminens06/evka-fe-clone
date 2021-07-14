import { graphql } from 'relay-hooks';

graphql`
  query ManagementProductionRelayallProductOrdersQuery {
    allProductOrders(unapprovedProductOrders: "") {
      edges {
        node {
          notes
          orderCount
          product {
            id
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
                customerInfo
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
