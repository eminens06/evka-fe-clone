/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type ProductOrderProductOrderStatus = "AS" | "C" | "CC" | "D" | "DF" | "P" | "PP" | "RR" | "%future added value";
export type ReturnCancelRelayGetUserOrderQueryVariables = {
    id?: string | null;
};
export type ReturnCancelRelayGetUserOrderQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly customerInfo: unknown | null;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                            readonly orderCount: number;
                            readonly price: number;
                            readonly notes: string;
                            readonly productOrderStatus: ProductOrderProductOrderStatus;
                            readonly product: {
                                readonly id: string;
                                readonly name: string;
                                readonly productName: string;
                                readonly sku: string;
                                readonly metaProducts: {
                                    readonly edges: ReadonlyArray<{
                                        readonly node: {
                                            readonly id: string;
                                            readonly categoryName: MetaProductCategoryName;
                                            readonly materialName: string;
                                            readonly materialId: number | null;
                                        } | null;
                                    } | null>;
                                };
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type ReturnCancelRelayGetUserOrderQuery = {
    readonly response: ReturnCancelRelayGetUserOrderQueryResponse;
    readonly variables: ReturnCancelRelayGetUserOrderQueryVariables;
};



/*
query ReturnCancelRelayGetUserOrderQuery(
  $id: String
) {
  allUserOrders(byMarketplaceOrderIdStatus: $id) {
    edges {
      node {
        id
        marketplace {
          name
          id
        }
        customerInfo
        products {
          edges {
            node {
              id
              orderCount
              price
              notes
              productOrderStatus
              product {
                id
                name
                productName
                sku
                metaProducts {
                  edges {
                    node {
                      id
                      categoryName
                      materialName
                      materialId
                    }
                  }
                }
              }
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
    "name": "id",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "byMarketplaceOrderIdStatus",
    "variableName": "id"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v5 = {
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
            (v2/*: any*/),
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
              "name": "productOrderStatus",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ProductNode",
              "kind": "LinkedField",
              "name": "product",
              "plural": false,
              "selections": [
                (v2/*: any*/),
                (v3/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "productName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "sku",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "MetaProductNodeConnection",
                  "kind": "LinkedField",
                  "name": "metaProducts",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "MetaProductNodeEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "MetaProductNode",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            (v2/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "categoryName",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "materialName",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "materialId",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReturnCancelRelayGetUserOrderQuery",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v5/*: any*/)
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
    "name": "ReturnCancelRelayGetUserOrderQuery",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v5/*: any*/)
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
    "name": "ReturnCancelRelayGetUserOrderQuery",
    "operationKind": "query",
    "text": "query ReturnCancelRelayGetUserOrderQuery(\n  $id: String\n) {\n  allUserOrders(byMarketplaceOrderIdStatus: $id) {\n    edges {\n      node {\n        id\n        marketplace {\n          name\n          id\n        }\n        customerInfo\n        products {\n          edges {\n            node {\n              id\n              orderCount\n              price\n              notes\n              productOrderStatus\n              product {\n                id\n                name\n                productName\n                sku\n                metaProducts {\n                  edges {\n                    node {\n                      id\n                      categoryName\n                      materialName\n                      materialId\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '788848dac7057e1b12b651ec7d4b3d10';
export default node;
