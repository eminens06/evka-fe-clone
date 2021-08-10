/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetaProductMetaType = "DF" | "F" | "G" | "M" | "MT" | "WD" | "%future added value";
export type MetaProductPaintType = "DF" | "MT" | "WD" | "%future added value";
export type ProductsRelayGetMetaProductsQueryVariables = {};
export type ProductsRelayGetMetaProductsQueryResponse = {
    readonly allMetaProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly categoryName: MetaProductCategoryName;
                readonly materialName: string;
                readonly materialId: number | null;
                readonly metaType: MetaProductMetaType;
                readonly paintType: MetaProductPaintType;
                readonly type: string | null;
            } | null;
        } | null>;
    } | null;
};
export type ProductsRelayGetMetaProductsQuery = {
    readonly response: ProductsRelayGetMetaProductsQueryResponse;
    readonly variables: ProductsRelayGetMetaProductsQueryVariables;
};



/*
query ProductsRelayGetMetaProductsQuery {
  allMetaProducts {
    edges {
      node {
        id
        categoryName
        materialName
        materialId
        metaType
        paintType
        type
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "MetaProductNodeConnection",
    "kind": "LinkedField",
    "name": "allMetaProducts",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "metaType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "paintType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductsRelayGetMetaProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductsRelayGetMetaProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductsRelayGetMetaProductsQuery",
    "operationKind": "query",
    "text": "query ProductsRelayGetMetaProductsQuery {\n  allMetaProducts {\n    edges {\n      node {\n        id\n        categoryName\n        materialName\n        materialId\n        metaType\n        paintType\n        type\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2d4a2694fdb2fd6f42dd87b39ad1748b';
export default node;
