import { graphql } from 'relay-hooks';

graphql`
  query ProductsRelayGetProductsQuery($search: String) {
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
