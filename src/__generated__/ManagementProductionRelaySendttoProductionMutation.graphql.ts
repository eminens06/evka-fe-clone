/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type SendToProductionInput = {
    productOrderId: string;
    clientMutationId?: string | null;
};
export type ManagementProductionRelaySendttoProductionMutationVariables = {
    input: SendToProductionInput;
};
export type ManagementProductionRelaySendttoProductionMutationResponse = {
    readonly sendToProduction: {
        readonly productOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ManagementProductionRelaySendttoProductionMutation = {
    readonly response: ManagementProductionRelaySendttoProductionMutationResponse;
    readonly variables: ManagementProductionRelaySendttoProductionMutationVariables;
};



/*
mutation ManagementProductionRelaySendttoProductionMutation(
  $input: SendToProductionInput!
) {
  sendToProduction(input: $input) {
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
    "type": "SendToProductionInput!"
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
    "concreteType": "SendToProductionPayload",
    "kind": "LinkedField",
    "name": "sendToProduction",
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
    "name": "ManagementProductionRelaySendttoProductionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagementProductionRelaySendttoProductionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ManagementProductionRelaySendttoProductionMutation",
    "operationKind": "mutation",
    "text": "mutation ManagementProductionRelaySendttoProductionMutation(\n  $input: SendToProductionInput!\n) {\n  sendToProduction(input: $input) {\n    productOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b84f671d8d18a508b727a7a090e21919';
export default node;
