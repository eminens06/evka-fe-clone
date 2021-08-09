/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCargoChaseNumberInput = {
    userOrderId: string;
    cargoChaseNumber: string;
    clientMutationId?: string | null;
};
export type ShipmentRelayAddCargoNoMutationVariables = {
    input: AddCargoChaseNumberInput;
};
export type ShipmentRelayAddCargoNoMutationResponse = {
    readonly addCargoChaseNumber: {
        readonly userOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ShipmentRelayAddCargoNoMutation = {
    readonly response: ShipmentRelayAddCargoNoMutationResponse;
    readonly variables: ShipmentRelayAddCargoNoMutationVariables;
};



/*
mutation ShipmentRelayAddCargoNoMutation(
  $input: AddCargoChaseNumberInput!
) {
  addCargoChaseNumber(input: $input) {
    userOrder {
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
    "type": "AddCargoChaseNumberInput!"
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
    "concreteType": "AddCargoChaseNumberPayload",
    "kind": "LinkedField",
    "name": "addCargoChaseNumber",
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
    "name": "ShipmentRelayAddCargoNoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentRelayAddCargoNoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentRelayAddCargoNoMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentRelayAddCargoNoMutation(\n  $input: AddCargoChaseNumberInput!\n) {\n  addCargoChaseNumber(input: $input) {\n    userOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5b7ef6d08583f3244d706b65487215ae';
export default node;
