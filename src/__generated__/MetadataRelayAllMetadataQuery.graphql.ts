/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetadataRelayAllMetadataQueryVariables = {
    category?: string | null;
};
export type MetadataRelayAllMetadataQueryResponse = {
    readonly allMetaProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly categoryName: MetaProductCategoryName;
                readonly materialName: string;
                readonly materialId: number | null;
            } | null;
        } | null>;
    } | null;
};
export type MetadataRelayAllMetadataQuery = {
    readonly response: MetadataRelayAllMetadataQueryResponse;
    readonly variables: MetadataRelayAllMetadataQueryVariables;
};



/*
query MetadataRelayAllMetadataQuery(
  $category: String
) {
  allMetaProducts(byCategory: $category) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "byCategory",
        "variableName": "category"
      }
    ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetadataRelayAllMetadataQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetadataRelayAllMetadataQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MetadataRelayAllMetadataQuery",
    "operationKind": "query",
    "text": "query MetadataRelayAllMetadataQuery(\n  $category: String\n) {\n  allMetaProducts(byCategory: $category) {\n    edges {\n      node {\n        id\n        categoryName\n        materialName\n        materialId\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4a9434d15a283fdcff76f046ce890383';
export default node;
