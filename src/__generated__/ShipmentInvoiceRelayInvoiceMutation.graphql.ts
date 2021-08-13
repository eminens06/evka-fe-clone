/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type InvoiceMutationInput = {
    userOrderId: string;
    invoiceNo: string;
    invoiceDate: unknown;
    clientMutationId?: string | null;
};
export type ShipmentInvoiceRelayInvoiceMutationVariables = {
    input: InvoiceMutationInput;
};
export type ShipmentInvoiceRelayInvoiceMutationResponse = {
    readonly invoiceMutation: {
        readonly userOrder: {
            readonly id: string;
            readonly invoiceStatus: string | null;
        } | null;
    } | null;
};
export type ShipmentInvoiceRelayInvoiceMutation = {
    readonly response: ShipmentInvoiceRelayInvoiceMutationResponse;
    readonly variables: ShipmentInvoiceRelayInvoiceMutationVariables;
};



/*
mutation ShipmentInvoiceRelayInvoiceMutation(
  $input: InvoiceMutationInput!
) {
  invoiceMutation(input: $input) {
    userOrder {
      id
      invoiceStatus
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
    "type": "InvoiceMutationInput!"
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
    "concreteType": "InvoiceMutationPayload",
    "kind": "LinkedField",
    "name": "invoiceMutation",
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
            "name": "invoiceStatus",
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
    "name": "ShipmentInvoiceRelayInvoiceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayInvoiceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayInvoiceMutation",
    "operationKind": "mutation",
    "text": "mutation ShipmentInvoiceRelayInvoiceMutation(\n  $input: InvoiceMutationInput!\n) {\n  invoiceMutation(input: $input) {\n    userOrder {\n      id\n      invoiceStatus\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '186ef2eadc8869825cc5f0132f5c279e';
export default node;
