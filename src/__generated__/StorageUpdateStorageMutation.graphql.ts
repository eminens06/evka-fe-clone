/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateStorageMutationInput = {
    storageItem?: StorageUpdateInput | null;
    clientMutationId?: string | null;
};
export type StorageUpdateInput = {
    productId: string;
    location?: string | null;
    note?: string | null;
    count?: number | null;
    missingParts?: Array<string | null> | null;
    id?: string | null;
};
export type StorageUpdateStorageMutationVariables = {
    input: UpdateStorageMutationInput;
};
export type StorageUpdateStorageMutationResponse = {
    readonly updateStorage: {
        readonly storageItem: {
            readonly id: string;
        } | null;
    } | null;
};
export type StorageUpdateStorageMutation = {
    readonly response: StorageUpdateStorageMutationResponse;
    readonly variables: StorageUpdateStorageMutationVariables;
};



/*
mutation StorageUpdateStorageMutation(
  $input: UpdateStorageMutationInput!
) {
  updateStorage(input: $input) {
    storageItem {
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
    "name": "input",
    "type": "UpdateStorageMutationInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateStorageMutationPayload",
    "kind": "LinkedField",
    "name": "updateStorage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StorageNode",
        "kind": "LinkedField",
        "name": "storageItem",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "StorageUpdateStorageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StorageUpdateStorageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "StorageUpdateStorageMutation",
    "operationKind": "mutation",
    "text": "mutation StorageUpdateStorageMutation(\n  $input: UpdateStorageMutationInput!\n) {\n  updateStorage(input: $input) {\n    storageItem {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6ff3c28a91212dc799662e962c91b288';
export default node;
