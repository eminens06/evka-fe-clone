/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetadataRelayAllMetadataQueryVariables = {
    category?: string | null;
    search?: string | null;
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
  $search: String
) {
  allMetaProducts(byCategory: $category, superSearch: $search) {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search",
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
      },
      {
        "kind": "Variable",
        "name": "superSearch",
        "variableName": "search"
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
    "text": "query MetadataRelayAllMetadataQuery(\n  $category: String\n  $search: String\n) {\n  allMetaProducts(byCategory: $category, superSearch: $search) {\n    edges {\n      node {\n        id\n        categoryName\n        materialName\n        materialId\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e304bb2fe734a15e32a97140cad65220';
export default node;
