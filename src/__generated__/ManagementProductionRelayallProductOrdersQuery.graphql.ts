/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type ManagementProductionRelayallProductOrdersQueryVariables = {};
export type ManagementProductionRelayallProductOrdersQueryResponse = {
    readonly allProductOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly notes: string;
                readonly orderCount: number;
                readonly product: {
                    readonly id: string;
                    readonly name: string;
                    readonly productName: string;
                    readonly metaProducts: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly categoryName: MetaProductCategoryName;
                                readonly materialName: string;
                            } | null;
                        } | null>;
                    };
                } | null;
                readonly userorderSet: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly customerInfo: unknown;
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
export type ManagementProductionRelayallProductOrdersQuery = {
    readonly response: ManagementProductionRelayallProductOrdersQueryResponse;
    readonly variables: ManagementProductionRelayallProductOrdersQueryVariables;
};



/*
query ManagementProductionRelayallProductOrdersQuery {
  allProductOrders(unapprovedProductOrders: "") {
    edges {
      node {
        notes
        orderCount
        product {
          id
          name
          productName
          metaProducts {
            edges {
              node {
                categoryName
                materialName
                id
              }
            }
          }
        }
        userorderSet {
          edges {
            node {
              customerInfo
              marketplaceOrderId
              marketplace {
                name
                id
              }
              id
            }
          }
        }
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "unapprovedProductOrders",
    "value": ""
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "name": "productName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "categoryName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v9 = {
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
    "name": "ManagementProductionRelayallProductOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ProductOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allProductOrders",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
                                  (v6/*: any*/),
                                  (v7/*: any*/)
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "userorderSet",
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
                              (v8/*: any*/),
                              (v9/*: any*/),
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
        "storageKey": "allProductOrders(unapprovedProductOrders:\"\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ManagementProductionRelayallProductOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ProductOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allProductOrders",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
                                  (v6/*: any*/),
                                  (v7/*: any*/),
                                  (v3/*: any*/)
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "userorderSet",
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
                              (v8/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
                                  (v4/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allProductOrders(unapprovedProductOrders:\"\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ManagementProductionRelayallProductOrdersQuery",
    "operationKind": "query",
    "text": "query ManagementProductionRelayallProductOrdersQuery {\n  allProductOrders(unapprovedProductOrders: \"\") {\n    edges {\n      node {\n        notes\n        orderCount\n        product {\n          id\n          name\n          productName\n          metaProducts {\n            edges {\n              node {\n                categoryName\n                materialName\n                id\n              }\n            }\n          }\n        }\n        userorderSet {\n          edges {\n            node {\n              customerInfo\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'de6e0ba387f8b20bffb2146e46ef353e';
export default node;
