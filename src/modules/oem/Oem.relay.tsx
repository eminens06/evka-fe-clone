import { graphql } from 'relay-hooks';

graphql`
  query OemRelayGetListQuery($search: String) {
    allProductByProductOrderStatus(statusType: "AS", superSearch: $search) {
      edges {
        node {
          id
          isKdvInclude
          product {
            name
            sku
          }
          externalService {
            edges {
              node {
                name
                module
              }
            }
          }
          userOrder {
            edges {
              node {
                marketplaceOrderId
                marketplace {
                  name
                }
                estimatedDeliveryDate
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  mutation OemRelayApproveMutation($input: ApproveAlSatInput!) {
    alSatApprove(input: $input) {
      productOrder {
        id
      }
    }
  }
`;
