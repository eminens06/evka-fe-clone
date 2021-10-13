/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskGetUserOrderListQueryVariables = {};
export type KioskGetUserOrderListQueryResponse = {
    readonly userOrderList: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly orderDate: unknown | null;
                readonly shipmentOrderDate: unknown | null;
                readonly shipmentCompanyName: string;
                readonly totalPrice: number;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly price: number;
                            readonly orderCount: number;
                            readonly product: {
                                readonly id: string;
                                readonly name: string;
                                readonly sku: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type KioskGetUserOrderListQuery = {
    readonly response: KioskGetUserOrderListQueryResponse;
    readonly variables: KioskGetUserOrderListQueryVariables;
};



/*
query KioskGetUserOrderListQuery {
  userOrderList {
    edges {
      node {
        id
        orderDate
        shipmentOrderDate
        shipmentCompanyName
        totalPrice
        marketplace {
          name
          id
        }
        products {
          edges {
            node {
              price
              orderCount
              product {
                id
                name
                sku
              }
              id
            }
          }
        }
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
  "name": "orderDate",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentOrderDate",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentCompanyName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPrice",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ProductNode",
  "kind": "LinkedField",
  "name": "product",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sku",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskGetUserOrderListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "userOrderList",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
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
                            "concreteType": "ProductOrderNode",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/)
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
    "name": "KioskGetUserOrderListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "userOrderList",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
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
                            "concreteType": "ProductOrderNode",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v0/*: any*/)
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
    "name": "KioskGetUserOrderListQuery",
    "operationKind": "query",
    "text": "query KioskGetUserOrderListQuery {\n  userOrderList {\n    edges {\n      node {\n        id\n        orderDate\n        shipmentOrderDate\n        shipmentCompanyName\n        totalPrice\n        marketplace {\n          name\n          id\n        }\n        products {\n          edges {\n            node {\n              price\n              orderCount\n              product {\n                id\n                name\n                sku\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '85df9381100e72cdf52dacb2d205ed1c';
export default node;
