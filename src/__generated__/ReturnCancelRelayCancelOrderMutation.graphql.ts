/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ReturnOrderMutationInput = {
    userOrderId: string;
    returnedDate?: unknown | null;
    returnNote?: string | null;
    productOrderIds?: Array<string | null> | null;
    imageId?: string | null;
    clientMutationId?: string | null;
};
export type ReturnCancelRelayCancelOrderMutationVariables = {
    input: ReturnOrderMutationInput;
};
export type ReturnCancelRelayCancelOrderMutationResponse = {
    readonly returnOrderMutation: {
        readonly userOrder: {
            readonly id: string;
            readonly isPartlyReturned: boolean;
        } | null;
    } | null;
};
export type ReturnCancelRelayCancelOrderMutation = {
    readonly response: ReturnCancelRelayCancelOrderMutationResponse;
    readonly variables: ReturnCancelRelayCancelOrderMutationVariables;
};



/*
mutation ReturnCancelRelayCancelOrderMutation(
  $input: ReturnOrderMutationInput!
) {
  returnOrderMutation(input: $input) {
    userOrder {
      id
      isPartlyReturned
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
    "type": "ReturnOrderMutationInput!"
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
    "concreteType": "ReturnOrderMutationPayload",
    "kind": "LinkedField",
    "name": "returnOrderMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNode",
        "kind": "LinkedField",
        "name": "userOrder",
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
            "name": "isPartlyReturned",
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
    "name": "ReturnCancelRelayCancelOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReturnCancelRelayCancelOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ReturnCancelRelayCancelOrderMutation",
    "operationKind": "mutation",
    "text": "mutation ReturnCancelRelayCancelOrderMutation(\n  $input: ReturnOrderMutationInput!\n) {\n  returnOrderMutation(input: $input) {\n    userOrder {\n      id\n      isPartlyReturned\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ba70b5ca8099a0d853db4f924417c69';
export default node;
