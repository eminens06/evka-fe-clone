/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCargoPriceInput = {
    userOrderId: string;
    cargoPrice: string;
    clientMutationId?: string | null;
};
export type ShipmentRelayAddCargoPriceMutationVariables = {
    input: AddCargoPriceInput;
};
export type ShipmentRelayAddCargoPriceMutationResponse = {
    readonly addCargoPrice: {
        readonly userOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type ShipmentRelayAddCargoPriceMutation = {
    readonly response: ShipmentRelayAddCargoPriceMutationResponse;
    readonly variables: ShipmentRelayAddCargoPriceMutationVariables;
};



/*
mutation ShipmentRelayAddCargoPriceMutation(
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
    "name": "ShipmentRelayAddCargoPriceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentRelayAddCargoPriceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentRelayAddCargoPriceMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentRelayAddCargoPriceMutation(\n  $input: AddCargoPriceInput!\n) {\n  addCargoPrice(input: $input) {\n    userOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8d0e76fe88403467a00afd88e11405ef';
export default node;
