/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCargoPriceInput = {
    userOrderId: string;
    cargoPrice: string;
    clientMutationId?: string | null;
};
export type ShipmentInvoiceRelayAddCargoPriceMutationVariables = {
    input: AddCargoPriceInput;
};
export type ShipmentInvoiceRelayAddCargoPriceMutationResponse = {
    readonly addCargoPrice: {
        readonly userOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ShipmentInvoiceRelayAddCargoPriceMutation = {
    readonly response: ShipmentInvoiceRelayAddCargoPriceMutationResponse;
    readonly variables: ShipmentInvoiceRelayAddCargoPriceMutationVariables;
};



/*
mutation ShipmentInvoiceRelayAddCargoPriceMutation(
  $input: AddCargoPriceInput!
) {
  addCargoPrice(input: $input) {
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
    "type": "AddCargoPriceInput!"
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
    "concreteType": "AddCargoPricePayload",
    "kind": "LinkedField",
    "name": "addCargoPrice",
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
    "name": "ShipmentInvoiceRelayAddCargoPriceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayAddCargoPriceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayAddCargoPriceMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentInvoiceRelayAddCargoPriceMutation(\n  $input: AddCargoPriceInput!\n) {\n  addCargoPrice(input: $input) {\n    userOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cfba31ab130b832938a464f161c1555f';
export default node;
