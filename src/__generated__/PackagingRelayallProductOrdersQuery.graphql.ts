/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
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
                readonly product: {
                    readonly name: string;
                    readonly isCollectable: boolean;
                    readonly packageCount: number;
                    readonly isMonte: boolean;
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
  allProductByProductOrderStatus(statusType: "PP", superSearch: $search) {
    edges {
      node {
        packagingStatus
        id
        product {
          name
          isCollectable
          packageCount
          isMonte
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCollectable",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "packageCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMonte",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "estimatedDeliveryDate",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/)
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
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
    "text": "query PackagingRelayallProductOrdersQuery(\n  $search: String\n) {\n  allProductByProductOrderStatus(statusType: \"PP\", superSearch: $search) {\n    edges {\n      node {\n        packagingStatus\n        id\n        product {\n          name\n          isCollectable\n          packageCount\n          isMonte\n          id\n        }\n        userOrder {\n          edges {\n            node {\n              estimatedDeliveryDate\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '46170a415be9acd683bbf3c760313f16';
export default node;
