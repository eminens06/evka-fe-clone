/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UserOrderOrderStatus = "DF" | "%future added value";
export type OrdersRelayGetAllUserOrdersQueryVariables = {};
export type OrdersRelayGetAllUserOrdersQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly customerInfo: unknown;
                readonly marketplaceOrderId: string;
                readonly orderStatus: UserOrderOrderStatus;
            } | null;
        } | null>;
    } | null;
};
export type OrdersRelayGetAllUserOrdersQuery = {
    readonly response: OrdersRelayGetAllUserOrdersQueryResponse;
    readonly variables: OrdersRelayGetAllUserOrdersQueryVariables;
};



/*
query OrdersRelayGetAllUserOrdersQuery {
  allUserOrders {
    edges {
      node {
        id
        marketplace {
          name
          id
        }
        customerInfo
        marketplaceOrderId
        orderStatus
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderStatus",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersRelayGetAllUserOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrdersRelayGetAllUserOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersRelayGetAllUserOrdersQuery",
    "operationKind": "query",
    "text": "query OrdersRelayGetAllUserOrdersQuery {\n  allUserOrders {\n    edges {\n      node {\n        id\n        marketplace {\n          name\n          id\n        }\n        customerInfo\n        marketplaceOrderId\n        orderStatus\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '78e40864f5585e767485541e0bfff0b4';
export default node;
