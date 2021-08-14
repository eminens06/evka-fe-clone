/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CancelOrderMutationInput = {
    userOrderId: string;
    cancelledDate: unknown;
    cancelNote?: string | null;
    productOrderIds?: Array<string | null> | null;
    clientMutationId?: string | null;
};
export type OrdersCancelOrderMutationVariables = {
    input: CancelOrderMutationInput;
};
export type OrdersCancelOrderMutationResponse = {
    readonly cancelOrderMutation: {
        readonly userOrder: {
            readonly id: string;
            readonly orderDate: unknown | null;
        } | null;
    } | null;
};
export type OrdersCancelOrderMutation = {
    readonly response: OrdersCancelOrderMutationResponse;
    readonly variables: OrdersCancelOrderMutationVariables;
};



/*
mutation OrdersCancelOrderMutation(
  $input: CancelOrderMutationInput!
) {
  cancelOrderMutation(input: $input) {
    userOrder {
      id
      orderDate
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
    "type": "CancelOrderMutationInput!"
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
    "concreteType": "CancelOrderMutationPayload",
    "kind": "LinkedField",
    "name": "cancelOrderMutation",
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
            "name": "orderDate",
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
    "name": "OrdersCancelOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersCancelOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersCancelOrderMutation",
    "operationKind": "mutation",
    "text": "mutation OrdersCancelOrderMutation(\n  $input: CancelOrderMutationInput!\n) {\n  cancelOrderMutation(input: $input) {\n    userOrder {\n      id\n      orderDate\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee534177642ea2b9277e0e6e12d5628b';
export default node;
