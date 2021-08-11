/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCargoChaseNumberInput = {
    userOrderId: string;
    cargoChaseNumber: string;
    clientMutationId?: string | null;
};
export type ShipmentInvoiceRelayAddCargoNoMutationVariables = {
    input: AddCargoChaseNumberInput;
};
export type ShipmentInvoiceRelayAddCargoNoMutationResponse = {
    readonly addCargoChaseNumber: {
        readonly userOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ShipmentInvoiceRelayAddCargoNoMutation = {
    readonly response: ShipmentInvoiceRelayAddCargoNoMutationResponse;
    readonly variables: ShipmentInvoiceRelayAddCargoNoMutationVariables;
};



/*
mutation ShipmentInvoiceRelayAddCargoNoMutation(
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
    "name": "ShipmentInvoiceRelayAddCargoNoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayAddCargoNoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayAddCargoNoMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentInvoiceRelayAddCargoNoMutation(\n  $input: AddCargoChaseNumberInput!\n) {\n  addCargoChaseNumber(input: $input) {\n    userOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '170ed59addba234bd773d21fdda87229';
export default node;
