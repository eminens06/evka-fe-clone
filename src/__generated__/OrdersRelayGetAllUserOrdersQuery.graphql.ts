/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductOrderType = "NR" | "SP" | "%future added value";
export type UserOrderOrderType = "N" | "NR" | "SP" | "ST" | "%future added value";
export type OrdersRelayGetAllUserOrdersQueryVariables = {};
export type OrdersRelayGetAllUserOrdersQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly notes: string;
                readonly id: string;
                readonly totalPrice: number;
                readonly orderType: UserOrderOrderType;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly customerInfo: unknown;
                readonly marketplaceOrderId: string;
                readonly orderStatus: string | null;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly orderCount: number;
                            readonly type: ProductOrderType;
                            readonly notes: string;
                            readonly product: {
                                readonly sku: string | null;
                                readonly name: string;
                                readonly productName: string;
                                readonly metaInfo: unknown | null;
                            } | null;
                        } | null;
                    } | null>;
                };
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
        notes
        id
        totalPrice
        orderType
        marketplace {
          name
          id
        }
        customerInfo
        marketplaceOrderId
        orderStatus
        products {
          edges {
            node {
              orderCount
              type
              notes
              product {
                sku
                name
                productName
                metaInfo
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
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
  "name": "totalPrice",
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
  "name": "orderCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "productName",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metaInfo",
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
                  (v1/*: any*/),
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
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v4/*: any*/),
                                  (v11/*: any*/),
                                  (v12/*: any*/)
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
                  (v1/*: any*/),
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
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
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
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v4/*: any*/),
                                  (v11/*: any*/),
                                  (v12/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersRelayGetAllUserOrdersQuery",
    "operationKind": "query",
    "text": "query OrdersRelayGetAllUserOrdersQuery {\n  allUserOrders {\n    edges {\n      node {\n        notes\n        id\n        totalPrice\n        orderType\n        marketplace {\n          name\n          id\n        }\n        customerInfo\n        marketplaceOrderId\n        orderStatus\n        products {\n          edges {\n            node {\n              orderCount\n              type\n              notes\n              product {\n                sku\n                name\n                productName\n                metaInfo\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7acc870fce1c4958bfe6da20cb11c9e5';
export default node;
