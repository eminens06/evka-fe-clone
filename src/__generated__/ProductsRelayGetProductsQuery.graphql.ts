/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductsRelayGetProductsQueryVariables = {
    search?: string | null;
};
export type ProductsRelayGetProductsQueryResponse = {
    readonly allProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly sku: string;
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
export type ProductsRelayGetProductsQuery = {
    readonly response: ProductsRelayGetProductsQueryResponse;
    readonly variables: ProductsRelayGetProductsQueryVariables;
};



/*
query ProductsRelayGetProductsQuery(
  $search: String
) {
  allProducts(superSearch: $search) {
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductsRelayGetProductsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                              (v5/*: any*/),
                              (v6/*: any*/)
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
    "name": "ProductsRelayGetProductsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                              (v5/*: any*/),
                              (v6/*: any*/),
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
    "name": "ProductsRelayGetProductsQuery",
    "operationKind": "query",
    "text": "query ProductsRelayGetProductsQuery(\n  $search: String\n) {\n  allProducts(superSearch: $search) {\n    edges {\n      node {\n        id\n        name\n        sku\n        metaProducts {\n          edges {\n            node {\n              materialName\n              type\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '70e8e7f1c2fe69bfc6d73fc213b3b2cd';
export default node;
