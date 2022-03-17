/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddToStorageMutationInput = {
    storageItem?: StorageCreateInput | null;
    clientMutationId?: string | null;
};
export type StorageCreateInput = {
    productId: string;
    location?: string | null;
    note?: string | null;
    count?: number | null;
    missingParts?: Array<string | null> | null;
};
export type StorageAddToStorageMutationVariables = {
    input: AddToStorageMutationInput;
};
export type StorageAddToStorageMutationResponse = {
    readonly addToStorage: {
        readonly storageItem: {
            readonly id: string;
        } | null;
    } | null;
};
export type StorageAddToStorageMutation = {
    readonly response: StorageAddToStorageMutationResponse;
    readonly variables: StorageAddToStorageMutationVariables;
};



/*
mutation StorageAddToStorageMutation(
  $input: AddToStorageMutationInput!
) {
  addToStorage(input: $input) {
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
    "type": "AddToStorageMutationInput!"
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
    "concreteType": "AddToStorageMutationPayload",
    "kind": "LinkedField",
    "name": "addToStorage",
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
    "name": "StorageAddToStorageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StorageAddToStorageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "StorageAddToStorageMutation",
    "operationKind": "mutation",
    "text": "mutation StorageAddToStorageMutation(\n  $input: AddToStorageMutationInput!\n) {\n  addToStorage(input: $input) {\n    storageItem {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '27791d5ee4670ca36f47dcfe99124068';
export default node;
