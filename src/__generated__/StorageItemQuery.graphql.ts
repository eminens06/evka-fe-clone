/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type StorageItemQueryVariables = {
    id: string;
};
export type StorageItemQueryResponse = {
    readonly storageItem: {
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
};
export type StorageItemQuery = {
    readonly response: StorageItemQueryResponse;
    readonly variables: StorageItemQueryVariables;
};



/*
query StorageItemQuery(
  $id: ID!
) {
  storageItem(id: $id) {
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "StorageNode",
    "kind": "LinkedField",
    "name": "storageItem",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StorageItemQuery",
    "selections": (v2/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StorageItemQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "StorageItemQuery",
    "operationKind": "query",
    "text": "query StorageItemQuery(\n  $id: ID!\n) {\n  storageItem(id: $id) {\n    id\n    missingParts\n    product {\n      id\n      name\n      sku\n    }\n    location\n    note\n    count\n  }\n}\n"
  }
};
})();
(node as any).hash = '84248effda3fc689007cb0766c1b4a1b';
export default node;
