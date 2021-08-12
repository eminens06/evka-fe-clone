import { graphql } from 'react-relay';

graphql`
  query TemplateRelayDetailQuery($id: ID!) {
    productOrder(id: $id) {
      id
      notes
      product {
        name
        sku
        width
        length
        height
        metaProducts {
          edges {
            node {
              materialName
              categoryName
            }
          }
        }
      }
    }
  }
`;
