/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExistInStorageInput = {
    productOrderId: string;
    storageId: string;
    clientMutationId?: string | null;
};
export type ManagementProductionRelayExistInStorageMutationVariables = {
    input: ExistInStorageInput;
};
export type ManagementProductionRelayExistInStorageMutationResponse = {
    readonly existInStorage: {
        readonly productOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ManagementProductionRelayExistInStorageMutation = {
    readonly response: ManagementProductionRelayExistInStorageMutationResponse;
    readonly variables: ManagementProductionRelayExistInStorageMutationVariables;
};



/*
mutation ManagementProductionRelayExistInStorageMutation(
  $input: ExistInStorageInput!
) {
  existInStorage(input: $input) {
    productOrder {
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
    "type": "ExistInStorageInput!"
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
    "concreteType": "ExistInStoragePayload",
    "kind": "LinkedField",
    "name": "existInStorage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductOrderNode",
        "kind": "LinkedField",
        "name": "productOrder",
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
    "name": "ManagementProductionRelayExistInStorageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagementProductionRelayExistInStorageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ManagementProductionRelayExistInStorageMutation",
    "operationKind": "mutation",
    "text": "mutation ManagementProductionRelayExistInStorageMutation(\n  $input: ExistInStorageInput!\n) {\n  existInStorage(input: $input) {\n    productOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e6622cc326334c89f45d7e435939f310';
export default node;
