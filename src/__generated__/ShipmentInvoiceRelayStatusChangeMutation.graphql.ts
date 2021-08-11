/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ChangeShipmentStatusInput = {
    userOrderIds?: Array<string | null> | null;
    shipmentType?: string | null;
    shipmentCompanyName?: string | null;
    clientMutationId?: string | null;
};
export type ShipmentInvoiceRelayStatusChangeMutationVariables = {
    input: ChangeShipmentStatusInput;
};
export type ShipmentInvoiceRelayStatusChangeMutationResponse = {
    readonly changeShipmentStatus: {
        readonly userOrders: ReadonlyArray<{
            readonly id: string;
        } | null> | null;
    } | null;
};
export type ShipmentInvoiceRelayStatusChangeMutation = {
    readonly response: ShipmentInvoiceRelayStatusChangeMutationResponse;
    readonly variables: ShipmentInvoiceRelayStatusChangeMutationVariables;
};



/*
mutation ShipmentInvoiceRelayStatusChangeMutation(
  $input: ChangeShipmentStatusInput!
) {
  changeShipmentStatus(input: $input) {
    userOrders {
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
    "type": "ChangeShipmentStatusInput!"
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
    "concreteType": "ChangeShipmentStatusPayload",
    "kind": "LinkedField",
    "name": "changeShipmentStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNode",
        "kind": "LinkedField",
        "name": "userOrders",
        "plural": true,
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
    "name": "ShipmentInvoiceRelayStatusChangeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayStatusChangeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayStatusChangeMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentInvoiceRelayStatusChangeMutation(\n  $input: ChangeShipmentStatusInput!\n) {\n  changeShipmentStatus(input: $input) {\n    userOrders {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8593db0371341bfe5f743d5e7b29ffb5';
export default node;
