/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type ProductOrderPackagingStatus = "C" | "DF" | "I" | "R" | "%future added value";
export type PackagingRelayallProductOrdersQueryVariables = {
    search?: string | null;
};
export type PackagingRelayallProductOrdersQueryResponse = {
    readonly allProductByProductOrderStatus: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly packagingStatus: ProductOrderPackagingStatus;
                readonly id: string;
                readonly notes: string;
                readonly product: {
                    readonly name: string;
                    readonly isCollectable: boolean;
                    readonly packageCount: number;
                    readonly isMonte: boolean;
                    readonly metaProducts: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly categoryName: MetaProductCategoryName;
                                readonly materialName: string;
                            } | null;
                        } | null>;
                    };
                    readonly productImages: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly images: {
                                    readonly edges: ReadonlyArray<{
                                        readonly node: {
                                            readonly id: string;
                                            readonly name: string;
                                            readonly height: number | null;
                                            readonly width: number | null;
                                            readonly file: {
                                              readonly url: string | null;
                                          } | null;
                                        } | null;
                                    } | null>;
                                } | null;
                            } | null;
                        } | null>;
                    };
                } | null;
                readonly userOrder: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly estimatedDeliveryDate: unknown | null;
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
export type PackagingRelayallProductOrdersQuery = {
    readonly response: PackagingRelayallProductOrdersQueryResponse;
    readonly variables: PackagingRelayallProductOrdersQueryVariables;
};



/*
query PackagingRelayallProductOrdersQuery(
  $search: String
) {
  allProductByProductOrderStatus(statusType: "PP", superSearch: $search, getAll: true) {
    edges {
      node {
        packagingStatus
        id
        notes
        product {
          name
          isCollectable
          packageCount
          isMonte
          metaProducts {
            edges {
              node {
                categoryName
                materialName
                id
              }
            }
          }
          productImages {
            edges {
              node {
                images {
                  edges {
                    node {
                      id
                      name
                      height
                      width
                    }
                  }
                }
                id
              }
            }
          }
          id
        }
        userOrder {
          edges {
            node {
              estimatedDeliveryDate
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "getAll",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "statusType",
    "value": "PP"
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
  "name": "packagingStatus",
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
  "name": "notes",
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
  "name": "isCollectable",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "packageCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMonte",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "categoryName",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageConnection",
  "kind": "LinkedField",
  "name": "images",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageNode",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v5/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "width",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageFileType",
              "kind": "LinkedField",
              "name": "file",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
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
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "estimatedDeliveryDate",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PackagingRelayallProductOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
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
                                  (v9/*: any*/),
                                  (v10/*: any*/)
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
                        "concreteType": "ImageGroupNodeConnection",
                        "kind": "LinkedField",
                        "name": "productImages",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageGroupNodeEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageGroupNode",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v11/*: any*/)
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
                              (v12/*: any*/),
                              (v13/*: any*/),
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
    "name": "PackagingRelayallProductOrdersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
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
                                  (v9/*: any*/),
                                  (v10/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageGroupNodeConnection",
                        "kind": "LinkedField",
                        "name": "productImages",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageGroupNodeEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageGroupNode",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v11/*: any*/),
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
                  },
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
                              (v12/*: any*/),
                              (v13/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
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
    "name": "PackagingRelayallProductOrdersQuery",
    "operationKind": "query",
    "text": "query PackagingRelayallProductOrdersQuery(\n  $search: String\n) {\n  allProductByProductOrderStatus(statusType: \"PP\", superSearch: $search, getAll: true) {\n    edges {\n      node {\n        packagingStatus\n        id\n        notes\n        product {\n          name\n          isCollectable\n          packageCount\n          isMonte\n          metaProducts {\n            edges {\n              node {\n                categoryName\n                materialName\n                id\n              }\n            }\n          }\n          productImages {\n            edges {\n              node {\n                images {\n                  edges {\n                    node {\n                      id\n                      name\n                      height\n                      width\n                    file {\n                    url\n                  }}\n                  }\n                }\n                id\n              }\n            }\n          }\n          id\n        }\n        userOrder {\n          edges {\n            node {\n              estimatedDeliveryDate\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '65cfcbc1149fc31f5af21f5f5b7e133f';
export default node;
