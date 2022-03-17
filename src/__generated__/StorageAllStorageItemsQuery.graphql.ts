/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type StorageAllStorageItemsQueryVariables = {};
export type StorageAllStorageItemsQueryResponse = {
    readonly storageItems: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly missingParts: ReadonlyArray<string>;
                readonly product: {
                    readonly id: string;
                    readonly name: string;
                    readonly sku: string;
                };
                readonly location: string;
                readonly note: string;
                readonly count: number;
            } | null;
        } | null>;
    } | null;
};
export type StorageAllStorageItemsQuery = {
    readonly response: StorageAllStorageItemsQueryResponse;
    readonly variables: StorageAllStorageItemsQueryVariables;
};



/*
query StorageAllStorageItemsQuery {
  storageItems {
    edges {
      node {
        id
        missingParts
        product {
          id
          name
          sku
        }
        location
        note
        count
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
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "StorageNodeConnection",
    "kind": "LinkedField",
    "name": "storageItems",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StorageNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StorageNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "missingParts",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductNode",
                "kind": "LinkedField",
                "name": "product",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sku",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "location",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "note",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "count",
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
    "name": "StorageAllStorageItemsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StorageAllStorageItemsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "StorageAllStorageItemsQuery",
    "operationKind": "query",
    "text": "query StorageAllStorageItemsQuery {\n  storageItems {\n    edges {\n      node {\n        id\n        missingParts\n        product {\n          id\n          name\n          sku\n        }\n        location\n        note\n        count\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e323affd7e5178bbc5ba351a1a330ee1';
export default node;
