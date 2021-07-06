/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type OrdersAllProductsWithoutSkuQueryVariables = {};
export type OrdersAllProductsWithoutSkuQueryResponse = {
    readonly allProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly sku: string | null;
                readonly metaProducts: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly materialName: string;
                            readonly type: string | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type OrdersAllProductsWithoutSkuQuery = {
    readonly response: OrdersAllProductsWithoutSkuQueryResponse;
    readonly variables: OrdersAllProductsWithoutSkuQueryVariables;
};



/*
query OrdersAllProductsWithoutSkuQuery {
  allProducts {
    edges {
      node {
        id
        name
        sku
        metaProducts {
          edges {
            node {
              materialName
              type
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
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersAllProductsWithoutSkuQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductNodeConnection",
        "kind": "LinkedField",
        "name": "allProducts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
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
                              (v3/*: any*/),
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
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrdersAllProductsWithoutSkuQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductNodeConnection",
        "kind": "LinkedField",
        "name": "allProducts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
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
                              (v3/*: any*/),
                              (v4/*: any*/),
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
    "name": "OrdersAllProductsWithoutSkuQuery",
    "operationKind": "query",
    "text": "query OrdersAllProductsWithoutSkuQuery {\n  allProducts {\n    edges {\n      node {\n        id\n        name\n        sku\n        metaProducts {\n          edges {\n            node {\n              materialName\n              type\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a0df053409a2c8f14e66afaf13e6dfc7';
export default node;
