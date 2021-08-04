/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductionRelaySummaryQueryVariables = {};
export type ProductionRelaySummaryQueryResponse = {
    readonly allProductByProductOrderStatus: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly ayakStatus: string | null;
                readonly tablaStatus: string | null;
                readonly fabricStatus: string | null;
                readonly marbleStatus: string | null;
                readonly glassStatus: string | null;
                readonly orderCount: number;
                readonly product: {
                    readonly id: string;
                    readonly name: string;
                } | null;
                readonly userOrder: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly marketplaceOrderId: string;
                            readonly marketplace: {
                                readonly name: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type ProductionRelaySummaryQuery = {
    readonly response: ProductionRelaySummaryQueryResponse;
    readonly variables: ProductionRelaySummaryQueryVariables;
};



/*
query ProductionRelaySummaryQuery {
  allProductByProductOrderStatus(statusType: "P") {
    edges {
      node {
        id
        ayakStatus
        tablaStatus
        fabricStatus
        marbleStatus
        glassStatus
        orderCount
        product {
          id
          name
        }
        userOrder {
          edges {
            node {
              marketplaceOrderId
              marketplace {
                name
                id
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
var v0 = [
  {
    "kind": "Literal",
    "name": "statusType",
    "value": "P"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ayakStatus",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tablaStatus",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fabricStatus",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marbleStatus",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "glassStatus",
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "ProductNode",
  "kind": "LinkedField",
  "name": "product",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductionRelaySummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ProductOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allProductByProductOrderStatus",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "userOrder",
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
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
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
        "storageKey": "allProductByProductOrderStatus(statusType:\"P\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductionRelaySummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ProductOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allProductByProductOrderStatus",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "userOrder",
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
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
                                  (v8/*: any*/),
                                  (v1/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v1/*: any*/)
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
        "storageKey": "allProductByProductOrderStatus(statusType:\"P\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductionRelaySummaryQuery",
    "operationKind": "query",
    "text": "query ProductionRelaySummaryQuery {\n  allProductByProductOrderStatus(statusType: \"P\") {\n    edges {\n      node {\n        id\n        ayakStatus\n        tablaStatus\n        fabricStatus\n        marbleStatus\n        glassStatus\n        orderCount\n        product {\n          id\n          name\n        }\n        userOrder {\n          edges {\n            node {\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '795ab092f8db1073480ebcb3209ae5dc';
export default node;
