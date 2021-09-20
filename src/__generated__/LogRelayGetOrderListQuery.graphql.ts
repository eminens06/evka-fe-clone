/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExternalServiceModule = "AS" | "F" | "GL" | "MR" | "PT" | "%future added value";
export type UserOrderOrderType = "N" | "NR" | "SP" | "ST" | "%future added value";
export type LogRelayGetOrderListQueryVariables = {
    search?: string | null;
};
export type LogRelayGetOrderListQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly orderType: UserOrderOrderType;
                readonly orderDate: unknown | null;
                readonly commissionRate: number;
                readonly completedDate: unknown | null;
                readonly orderStatus: string | null;
                readonly notes: string;
                readonly totalPrice: number;
                readonly customerInfo: unknown | null;
                readonly marketplaceOrderId: string;
                readonly invoiceDate: unknown | null;
                readonly invoiceNo: string | null;
                readonly isKdvInclude: boolean;
                readonly shipmentOrderDate: unknown | null;
                readonly cargoChaseNumber: string | null;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly product: {
                                readonly sku: string;
                                readonly name: string;
                                readonly metaInfo: unknown | null;
                            } | null;
                            readonly externalService: {
                                readonly edges: ReadonlyArray<{
                                    readonly node: {
                                        readonly name: string;
                                        readonly isRawMaterial: boolean;
                                        readonly module: ExternalServiceModule;
                                    } | null;
                                } | null>;
                            };
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type LogRelayGetOrderListQuery = {
    readonly response: LogRelayGetOrderListQueryResponse;
    readonly variables: LogRelayGetOrderListQueryVariables;
};



/*
query LogRelayGetOrderListQuery(
  $search: String
) {
  allUserOrders(superSearch: $search) {
    edges {
      node {
        id
        orderType
        orderDate
        commissionRate
        completedDate
        orderStatus
        notes
        totalPrice
        customerInfo
        marketplaceOrderId
        invoiceDate
        invoiceNo
        isKdvInclude
        shipmentOrderDate
        cargoChaseNumber
        marketplace {
          name
          id
        }
        products {
          edges {
            node {
              product {
                sku
                name
                metaInfo
                id
              }
              externalService {
                edges {
                  node {
                    name
                    isRawMaterial
                    module
                    id
                  }
                }
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
  "name": "orderDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commissionRate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completedDate",
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
  "name": "notes",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPrice",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "invoiceDate",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "invoiceNo",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isKdvInclude",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentOrderDate",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cargoChaseNumber",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metaInfo",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isRawMaterial",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "module",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogRelayGetOrderListQuery",
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/)
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
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v18/*: any*/),
                                  (v17/*: any*/),
                                  (v19/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExternalServiceNodeConnection",
                                "kind": "LinkedField",
                                "name": "externalService",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExternalServiceNodeEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ExternalServiceNode",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v17/*: any*/),
                                          (v20/*: any*/),
                                          (v21/*: any*/)
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
    "name": "LogRelayGetOrderListQuery",
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/),
                      (v2/*: any*/)
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
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ProductNode",
                                "kind": "LinkedField",
                                "name": "product",
                                "plural": false,
                                "selections": [
                                  (v18/*: any*/),
                                  (v17/*: any*/),
                                  (v19/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExternalServiceNodeConnection",
                                "kind": "LinkedField",
                                "name": "externalService",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExternalServiceNodeEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ExternalServiceNode",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v17/*: any*/),
                                          (v20/*: any*/),
                                          (v21/*: any*/),
                                          (v2/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
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
    "name": "LogRelayGetOrderListQuery",
    "operationKind": "query",
    "text": "query LogRelayGetOrderListQuery(\n  $search: String\n) {\n  allUserOrders(superSearch: $search) {\n    edges {\n      node {\n        id\n        orderType\n        orderDate\n        commissionRate\n        completedDate\n        orderStatus\n        notes\n        totalPrice\n        customerInfo\n        marketplaceOrderId\n        invoiceDate\n        invoiceNo\n        isKdvInclude\n        shipmentOrderDate\n        cargoChaseNumber\n        marketplace {\n          name\n          id\n        }\n        products {\n          edges {\n            node {\n              product {\n                sku\n                name\n                metaInfo\n                id\n              }\n              externalService {\n                edges {\n                  node {\n                    name\n                    isRawMaterial\n                    module\n                    id\n                  }\n                }\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '751efa916bc1fc020890c3809c2e77c2';
export default node;
