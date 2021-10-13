import { graphql } from 'react-relay';

graphql`
  query KioskSellComparisonQuery {
    sellComparison
  }
`;

graphql`
  query KioskMonthlySalesAveragesQuery {
    monthlySalesAverages
  }
`;

graphql`
  query KioskGetUserOrderListQuery {
    userOrderList {
      edges {
        node {
          id
          orderDate
          shipmentOrderDate
          shipmentCompanyName
          totalPrice
          marketplace {
            name
          }
          products {
            edges {
              node {
                price
                orderCount
                product {
                  id
                  name
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
  query KioskMarketplaceTotalsQuery(
    $startDate: DateTime
    $endDate: DateTime
    $qtype: String
  ) {
    marketplaceTotals(startDate: $startDate, endDate: $endDate, qtype: $qtype)
  }
`;
