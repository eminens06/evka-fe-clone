/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ApproveAlSatInput = {
    productId: string;
    externalId: string;
    purchasePrice: number;
    clientMutationId?: string | null;
};
export type OemRelayApproveMutationVariables = {
    input: ApproveAlSatInput;
};
export type OemRelayApproveMutationResponse = {
    readonly alSatApprove: {
        readonly productOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type OemRelayApproveMutation = {
    readonly response: OemRelayApproveMutationResponse;
    readonly variables: OemRelayApproveMutationVariables;
};



/*
mutation OemRelayApproveMutation(
  $input: ApproveAlSatInput!
) {
  alSatApprove(input: $input) {
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
    "type": "ApproveAlSatInput!"
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
    "concreteType": "ApproveAlSatPayload",
    "kind": "LinkedField",
    "name": "alSatApprove",
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
    "name": "OemRelayApproveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OemRelayApproveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OemRelayApproveMutation",
    "operationKind": "mutation",
    "text": "mutation OemRelayApproveMutation(\n  $input: ApproveAlSatInput!\n) {\n  alSatApprove(input: $input) {\n    productOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '86a3e8787b3b59c1bbd946367ac15f15';
export default node;
