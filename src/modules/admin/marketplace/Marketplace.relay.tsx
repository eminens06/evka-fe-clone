import { graphql } from 'relay-hooks';

graphql`
  query MarketplaceRelayGetMarketplacesQuery {
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

/* graphql`
mutation MarketplaceRelay {
    createMarketplace(input:{
      name: "Trendyol",
      commissionRate: 15,
      deliveryDate: 15,
    }) {
      marketplace {
        id
        name
        commissionRate
        deliveryDate
      }
    }
  }
` */
