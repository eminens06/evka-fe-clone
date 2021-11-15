import { graphql } from 'relay-hooks';

graphql`
  query PackagingRelayallProductOrdersQuery($search: String) {
    allProductByProductOrderStatus(statusType: "PP", superSearch: $search) {
      edges {
        node {
          packagingStatus
          id
          product {
            name
            isCollectable
            packageCount
            isMonte
            metaProducts {
              edges {
                node {
                  categoryName
                  materialName
                }
              }
            }
            productImages {
              edges {
                node {
                  images {
                    edges {
                      node {
                        id
                        name
                        height
                        width
                        file {
                          url
                        }
                        externalUrl
                      }
                    }
                  }
                }
              }
            }
          }
          userOrder {
            edges {
              node {
                estimatedDeliveryDate
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

graphql`
  mutation PackagingRelayChangePackagingStatusMutation(
    $input: ChangePackagingStatusInput!
  ) {
    changePackagingStatus(input: $input) {
      productOrder {
        id
      }
    }
  }
`;
