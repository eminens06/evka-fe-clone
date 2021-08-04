/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetaProductMetaType = "DF" | "MT" | "WD" | "%future added value";
export type ProductionRelayWorkshopQueryVariables = {
    workshopType?: string | null;
};
export type ProductionRelayWorkshopQueryResponse = {
    readonly allProductOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly woodStatus: string | null;
                readonly metalStatus: string | null;
                readonly tablaStatus: string | null;
                readonly ayakStatus: string | null;
                readonly fabricStatus: string | null;
                readonly marbleStatus: string | null;
                readonly glassStatus: string | null;
                readonly orderCount: number;
                readonly product: {
                    readonly id: string;
                    readonly sku: string | null;
                    readonly name: string;
                    readonly width: number | null;
                    readonly height: number | null;
                    readonly length: number | null;
                    readonly metaProducts: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly categoryName: MetaProductCategoryName;
                                readonly materialName: string;
                                readonly metaType: MetaProductMetaType;
                            } | null;
                        } | null>;
                    };
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
                readonly externalService: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly name: string;
                            readonly phoneNumber: string | null;
                            readonly address: string;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type ProductionRelayWorkshopQuery = {
    readonly response: ProductionRelayWorkshopQueryResponse;
    readonly variables: ProductionRelayWorkshopQueryVariables;
};



/*
query ProductionRelayWorkshopQuery(
  $workshopType: String
) {
  allProductOrders(byWorkshopType: $workshopType) {
    edges {
      node {
        id
        woodStatus
        metalStatus
        tablaStatus
        ayakStatus
        fabricStatus
        marbleStatus
        glassStatus
        orderCount
        product {
          id
          sku
          name
          width
          height
          length
          metaProducts {
            edges {
              node {
                categoryName
                materialName
                metaType
                id
              }
            }
          }
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
        externalService {
          edges {
            node {
              name
              phoneNumber
              address
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
    "name": "workshopType",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "byWorkshopType",
    "variableName": "workshopType"
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
  "name": "woodStatus",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metalStatus",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tablaStatus",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ayakStatus",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fabricStatus",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marbleStatus",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "glassStatus",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderCount",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "length",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "categoryName",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metaType",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductionRelayWorkshopQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
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
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  (v18/*: any*/)
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
                              (v19/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
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
                              (v12/*: any*/),
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
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductionRelayWorkshopQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
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
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  (v18/*: any*/),
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
                              (v19/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MarketPlaceNode",
                                "kind": "LinkedField",
                                "name": "marketplace",
                                "plural": false,
                                "selections": [
                                  (v12/*: any*/),
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
                              (v12/*: any*/),
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
    "name": "ProductionRelayWorkshopQuery",
    "operationKind": "query",
    "text": "query ProductionRelayWorkshopQuery(\n  $workshopType: String\n) {\n  allProductOrders(byWorkshopType: $workshopType) {\n    edges {\n      node {\n        id\n        woodStatus\n        metalStatus\n        tablaStatus\n        ayakStatus\n        fabricStatus\n        marbleStatus\n        glassStatus\n        orderCount\n        product {\n          id\n          sku\n          name\n          width\n          height\n          length\n          metaProducts {\n            edges {\n              node {\n                categoryName\n                materialName\n                metaType\n                id\n              }\n            }\n          }\n        }\n        userOrder {\n          edges {\n            node {\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n        externalService {\n          edges {\n            node {\n              name\n              phoneNumber\n              address\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '656fe975aa902090d5b92d9c327e7cf6';
export default node;
