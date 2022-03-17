import { graphql } from 'relay-hooks';

graphql`
  query StorageAllStorageItemsQuery {
    storageItems {
      edges {
        node {
          id
          missingParts
          product {
            id
            name
            sku
          }
          location
          note
          count
        }
      }
    }
  }
`;

graphql`
  query StorageItemQuery($id: ID!) {
    storageItem(id: $id) {
      id
      missingParts
      product {
        id
        name
        sku
      }
      location
      note
      count
    }
  }
`;

graphql`
  mutation StorageAddToStorageMutation($input: AddToStorageMutationInput!) {
    addToStorage(input: $input) {
      storageItem {
        id
      }
    }
  }
`;

graphql`
  mutation StorageUpdateStorageMutation($input: UpdateStorageMutationInput!) {
    updateStorage(input: $input) {
      storageItem {
        id
      }
    }
  }
`;

graphql`
  mutation StorageDeleteStorageMutation($input: DeleteStorageMutationInput!) {
    deleteStorage(input: $input) {
      deletedId
    }
  }
`;
