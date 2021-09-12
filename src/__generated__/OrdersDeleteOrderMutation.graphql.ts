/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteUserOrderMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type OrdersDeleteOrderMutationVariables = {
    input: DeleteUserOrderMutationInput;
};
export type OrdersDeleteOrderMutationResponse = {
    readonly deleteUserOrder: {
        readonly deletedId: string | null;
    } | null;
};
export type OrdersDeleteOrderMutation = {
    readonly response: OrdersDeleteOrderMutationResponse;
    readonly variables: OrdersDeleteOrderMutationVariables;
};



/*
mutation OrdersDeleteOrderMutation(
  $input: DeleteUserOrderMutationInput!
) {
  deleteUserOrder(input: $input) {
    deletedId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteUserOrderMutationInput!"
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
    "concreteType": "DeleteUserOrderMutationPayload",
    "kind": "LinkedField",
    "name": "deleteUserOrder",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "OrdersDeleteOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersDeleteOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersDeleteOrderMutation",
    "operationKind": "mutation",
    "text": "mutation OrdersDeleteOrderMutation(\n  $input: DeleteUserOrderMutationInput!\n) {\n  deleteUserOrder(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e48a067cf8fefb4bd3a273b56fe129a';
export default node;
