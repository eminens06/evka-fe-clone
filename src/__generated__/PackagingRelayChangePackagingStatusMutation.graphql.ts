/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ChangePackagingStatusInput = {
    productOrderId: string;
    clientMutationId?: string | null;
};
export type PackagingRelayChangePackagingStatusMutationVariables = {
    input: ChangePackagingStatusInput;
};
export type PackagingRelayChangePackagingStatusMutationResponse = {
    readonly changePackagingStatus: {
        readonly productOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type PackagingRelayChangePackagingStatusMutation = {
    readonly response: PackagingRelayChangePackagingStatusMutationResponse;
    readonly variables: PackagingRelayChangePackagingStatusMutationVariables;
};



/*
mutation PackagingRelayChangePackagingStatusMutation(
  $input: ChangePackagingStatusInput!
) {
  changePackagingStatus(input: $input) {
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
    "type": "ChangePackagingStatusInput!"
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
    "concreteType": "ChangePackagingStatusPayload",
    "kind": "LinkedField",
    "name": "changePackagingStatus",
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
    "name": "PackagingRelayChangePackagingStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PackagingRelayChangePackagingStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PackagingRelayChangePackagingStatusMutation",
    "operationKind": "mutation",
    "text": "mutation PackagingRelayChangePackagingStatusMutation(\n  $input: ChangePackagingStatusInput!\n) {\n  changePackagingStatus(input: $input) {\n    productOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '13814af8392137010a67aa6e70f653ee';
export default node;
