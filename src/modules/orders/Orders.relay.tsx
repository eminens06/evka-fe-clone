import { graphql } from 'relay-hooks';

/* graphql`
  query OrdersRelayAllUserOrdersQuery($first: Int) {
    ...OrdersRelayAllUserOrdersFragment @arguments(first: $first)
  }
`;

graphql`
  query OrdersRelayAllUserOrdersNormalQuery($first: Int) {
    allUserOrders(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          type
          price
          notes
          orderCount
        }
      }
    }
  }
`; */

/*graphql`
  fragment OrdersRelayAllUserOrdersFragment on Query
  @argumentDefinitions(first: { type: "Int", defaultValue: 2 }) {
    allUserOrders(first: $first) @connection(key: "Orders_allUserOrders") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...OrdersRelayRowComponentFragment
        }
      }
    }
  }
`; */

/* graphql`
  fragment OrdersRelayRowComponentFragment on ProductOrderNode {
    id
    type
    price
    notes
    orderCount
  }
`; */

/*graphql`
  query OrdersRelayAllUserOrdersNormalQuery($first: Int) {
    allUserOrders(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          price
          notes
          orderCount
        }
      }
    }
  }
`; */
