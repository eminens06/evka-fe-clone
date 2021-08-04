/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type SendReceivedProductToProductionInput = {
    productOrderId: string;
    workshopType: string;
    clientMutationId?: string | null;
};
export type ProductionRelayResendToProductionMutationVariables = {
    input: SendReceivedProductToProductionInput;
};
export type ProductionRelayResendToProductionMutationResponse = {
    readonly sendReceivedProductToProduction: {
        readonly productOrder: {
            readonly id: string;
            readonly woodStatus: string | null;
            readonly metalStatus: string | null;
            readonly marbleStatus: string | null;
        } | null;
    } | null;
};
export type ProductionRelayResendToProductionMutation = {
    readonly response: ProductionRelayResendToProductionMutationResponse;
    readonly variables: ProductionRelayResendToProductionMutationVariables;
};



/*
mutation ProductionRelayResendToProductionMutation(
  $input: SendReceivedProductToProductionInput!
) {
  sendReceivedProductToProduction(input: $input) {
    productOrder {
      id
      woodStatus
      metalStatus
      marbleStatus
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
    "type": "SendReceivedProductToProductionInput!"
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
    "concreteType": "SendReceivedProductToProductionPayload",
    "kind": "LinkedField",
    "name": "sendReceivedProductToProduction",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "woodStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metalStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "marbleStatus",
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
    "name": "ProductionRelayResendToProductionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductionRelayResendToProductionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductionRelayResendToProductionMutation",
    "operationKind": "mutation",
    "text": "mutation ProductionRelayResendToProductionMutation(\n  $input: SendReceivedProductToProductionInput!\n) {\n  sendReceivedProductToProduction(input: $input) {\n    productOrder {\n      id\n      woodStatus\n      metalStatus\n      marbleStatus\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c3ff99707b8761bb687b7491b72833b';
export default node;
