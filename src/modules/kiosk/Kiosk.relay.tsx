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
