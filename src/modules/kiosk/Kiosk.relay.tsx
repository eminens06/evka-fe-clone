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
    newMarketplaceTotal(startDate: $startDate, endDate: $endDate, qtype: $qtype)
  }
`;

graphql`
  query KioskHakedisTotalQuery($startDate: DateTime, $endDate: DateTime) {
    hakedisTotal(startDate: $startDate, endDate: $endDate)
  }
`;

graphql`
  query KioskExternalHakedisQuery($startDate: DateTime, $endDate: DateTime) {
    externalHakedis(startDate: $startDate, endDate: $endDate)
  }
`;

graphql`
  query KioskMainCostQuery($startDate: DateTime, $endDate: DateTime) {
    mainCost(startDate: $startDate, endDate: $endDate)
  }
`;

graphql`
  query KioskDownloadDataQuery($startDate: DateTime, $endDate: DateTime) {
    download(startDate: $startDate, endDate: $endDate)
  }
`;

graphql`
  query KioskMarketplacesBonusesQuery($queryMonth: Int, $queryYear: Int) {
    marketplacesBonuses(queryMonth: $queryMonth, queryYear: $queryYear)
  }
`;

graphql`
  query KioskDownloadProductsQuery {
    downloadProducts
  }
`;

graphql`
  mutation KioskUpdateProductsMutation($input: UpdateProductsMutationInput!) {
    updateProducts(input: $input) {
      ok
    }
  }
`;

graphql`
  query KioskTopSellingProductsQuery(
    $startDate: DateTime
    $endDate: DateTime
    $marketplaceName: String
  ) {
    topSellingProducts(
      startDate: $startDate
      endDate: $endDate
      marketplaceName: $marketplaceName
    )
  }
`;
