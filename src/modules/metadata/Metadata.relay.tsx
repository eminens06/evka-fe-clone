import { graphql } from 'relay-hooks';

graphql`
  query MetadataRelayAllMetadataQuery($category: String) {
    allMetaProducts(byCategory: $category) {
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
  mutation MetadataRelayCreateMetadataMutation(
    $input: CreateMetaProductMutationInput!
  ) {
    createMetaProduct(input: $input) {
      metaProduct {
        categoryName
        materialName
        materialId
        metaType
        id
      }
    }
  }
`;

graphql`
  mutation MetadataRelayUpdateMetadataMutation(
    $input: UpdateMetaProductMutationInput!
  ) {
    updateMetaProduct(input: $input) {
      metaProduct {
        categoryName
        materialName
        materialId
        metaType
        id
      }
    }
  }
`;
