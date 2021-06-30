/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrdersRelayAllUserOrdersQueryVariables = {
    first?: number | null;
};
export type OrdersRelayAllUserOrdersQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"OrdersRelayAllUserOrdersFragment">;
};
export type OrdersRelayAllUserOrdersQuery = {
    readonly response: OrdersRelayAllUserOrdersQueryResponse;
    readonly variables: OrdersRelayAllUserOrdersQueryVariables;
};



/*
query OrdersRelayAllUserOrdersQuery(
  $first: Int
) {
  ...OrdersRelayAllUserOrdersFragment_3ASum4
}

fragment OrdersRelayAllUserOrdersFragment_3ASum4 on Query {
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
        ...OrdersRelayRowComponentFragment
        id
        __typename
      }
    }
  }
}

fragment OrdersRelayRowComponentFragment on ProductOrderNode {
  id
  type
  price
  notes
  orderCount
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersRelayAllUserOrdersQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "OrdersRelayAllUserOrdersFragment"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersRelayAllUserOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductOrderNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductOrderNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "notes",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "orderCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "Orders_allUserOrders",
        "kind": "LinkedHandle",
        "name": "allUserOrders"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersRelayAllUserOrdersQuery",
    "operationKind": "query",
    "text": "query OrdersRelayAllUserOrdersQuery(\n  $first: Int\n) {\n  ...OrdersRelayAllUserOrdersFragment_3ASum4\n}\n\nfragment OrdersRelayAllUserOrdersFragment_3ASum4 on Query {\n  allUserOrders(first: $first) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        ...OrdersRelayRowComponentFragment\n        id\n        __typename\n      }\n    }\n  }\n}\n\nfragment OrdersRelayRowComponentFragment on ProductOrderNode {\n  id\n  type\n  price\n  notes\n  orderCount\n}\n"
  }
};
})();
(node as any).hash = '2c7912316d9253213b900079e80be4a4';
export default node;
