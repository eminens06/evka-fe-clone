/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteStorageMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type StorageDeleteStorageMutationVariables = {
    input: DeleteStorageMutationInput;
};
export type StorageDeleteStorageMutationResponse = {
    readonly deleteStorage: {
        readonly deletedId: string;
    } | null;
};
export type StorageDeleteStorageMutation = {
    readonly response: StorageDeleteStorageMutationResponse;
    readonly variables: StorageDeleteStorageMutationVariables;
};



/*
mutation StorageDeleteStorageMutation(
  $input: DeleteStorageMutationInput!
) {
  deleteStorage(input: $input) {
    deletedId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteStorageMutationInput!"
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
    "concreteType": "DeleteStorageMutationPayload",
    "kind": "LinkedField",
    "name": "deleteStorage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "StorageDeleteStorageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StorageDeleteStorageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "StorageDeleteStorageMutation",
    "operationKind": "mutation",
    "text": "mutation StorageDeleteStorageMutation(\n  $input: DeleteStorageMutationInput!\n) {\n  deleteStorage(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e2a30f50bf65702fd36114af9253cb9e';
export default node;
