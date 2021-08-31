/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductOrderProductOrderStatus = "AS" | "C" | "CC" | "D" | "DF" | "P" | "PP" | "RR" | "%future added value";
export type ProductOrderType = "NR" | "SP" | "%future added value";
export type UserOrderOrderType = "N" | "NR" | "SP" | "ST" | "%future added value";
export type ReturnCancelListOrdersQueryVariables = {
    search?: string | null;
};
export type ReturnCancelListOrdersQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly orderType: UserOrderOrderType;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly customerInfo: unknown | null;
                readonly marketplaceOrderId: string;
                readonly orderStatus: string | null;
                readonly isPartlyCanceled: boolean;
                readonly isPartlyReturned: boolean;
                readonly cancelNote: string;
                readonly returnNote: string;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly orderCount: number;
                            readonly type: ProductOrderType;
                            readonly notes: string;
                            readonly productOrderStatus: ProductOrderProductOrderStatus;
                            readonly product: {
                                readonly sku: string;
                                readonly name: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type ReturnCancelListOrdersQuery = {
    readonly response: ReturnCancelListOrdersQueryResponse;
    readonly variables: ReturnCancelListOrdersQueryVariables;
};



/*
query ReturnCancelListOrdersQuery(
  $search: String
) {
  allUserOrders(returnCancelOrders: "a", superSearch: $search) {
    edges {
      node {
        id
        orderType
        marketplace {
          name
          id
        }
        customerInfo
        marketplaceOrderId
        orderStatus
        isPartlyCanceled
        isPartlyReturned
        cancelNote
        returnNote
        products {
          edges {
            node {
              orderCount
              type
              notes
              productOrderStatus
              product {
                sku
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "returnCancelOrders",
    "value": "a"
  },
  {
    "kind": "Variable",
    "name": "superSearch",
    "variableName": "search"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderStatus",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPartlyCanceled",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPartlyReturned",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cancelNote",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "returnNote",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderCount",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "productOrderStatus",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReturnCancelListOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
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
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v16/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReturnCancelListOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
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
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v16/*: any*/),
                                  (v4/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
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
    "name": "ReturnCancelListOrdersQuery",
    "operationKind": "query",
    "text": "query ReturnCancelListOrdersQuery(\n  $search: String\n) {\n  allUserOrders(returnCancelOrders: \"a\", superSearch: $search) {\n    edges {\n      node {\n        id\n        orderType\n        marketplace {\n          name\n          id\n        }\n        customerInfo\n        marketplaceOrderId\n        orderStatus\n        isPartlyCanceled\n        isPartlyReturned\n        cancelNote\n        returnNote\n        products {\n          edges {\n            node {\n              orderCount\n              type\n              notes\n              productOrderStatus\n              product {\n                sku\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '782285fd4be265e7364dc63fe2b63775';
export default node;
