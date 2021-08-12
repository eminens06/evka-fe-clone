/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type TemplateRelayDetailQueryVariables = {
    id: string;
};
export type TemplateRelayDetailQueryResponse = {
    readonly productOrder: {
        readonly id: string;
        readonly notes: string;
        readonly product: {
            readonly name: string;
            readonly sku: string | null;
            readonly width: number | null;
            readonly length: number | null;
            readonly height: number | null;
            readonly metaProducts: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly materialName: string;
                        readonly categoryName: MetaProductCategoryName;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
};
export type TemplateRelayDetailQuery = {
    readonly response: TemplateRelayDetailQueryResponse;
    readonly variables: TemplateRelayDetailQueryVariables;
};



/*
query TemplateRelayDetailQuery(
  $id: ID!
) {
  productOrder(id: $id) {
    id
    notes
    product {
      name
      sku
      width
      length
      height
      metaProducts {
        edges {
          node {
            materialName
            categoryName
            id
          }
        }
      }
      id
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
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
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
  "name": "notes",
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
  "name": "sku",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "length",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialName",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "categoryName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TemplateRelayDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductOrderNode",
        "kind": "LinkedField",
        "name": "productOrder",
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
    "name": "TemplateRelayDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductOrderNode",
        "kind": "LinkedField",
        "name": "productOrder",
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TemplateRelayDetailQuery",
    "operationKind": "query",
    "text": "query TemplateRelayDetailQuery(\n  $id: ID!\n) {\n  productOrder(id: $id) {\n    id\n    notes\n    product {\n      name\n      sku\n      width\n      length\n      height\n      metaProducts {\n        edges {\n          node {\n            materialName\n            categoryName\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '51df37ffb851acdd4dc2aa9f2c270725';
export default node;
