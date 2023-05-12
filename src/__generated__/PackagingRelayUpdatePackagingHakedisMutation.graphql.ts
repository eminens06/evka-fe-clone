/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdatePackagingHakedisInput = {
    productOrderId: string;
    clientMutationId?: string | null;
    changeOfPackaging?: number | null;
};
export type PackagingRelayUpdatePackagingHakedisMutationVariables = {
    input: UpdatePackagingHakedisInput;
};
export type PackagingRelayUpdatePackagingHakedisMutationResponse = {
    readonly updatePackagingHakedis: {
        readonly productOrder: {
            readonly id: string;
        } | null;
    } | null;
};
export type PackagingRelayUpdatePackagingHakedisMutation = {
    readonly response: PackagingRelayUpdatePackagingHakedisMutationResponse;
    readonly variables: PackagingRelayUpdatePackagingHakedisMutationVariables;
};



/*
mutation PackagingRelayUpdatePackagingHakedisMutation(
  $input: UpdatePackagingHakedisInput!
) {
  updatePackagingHakedis(input: $input) {
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
    "type": "UpdatePackagingHakedisInput!"
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
    "concreteType": "UpdatePackagingHakedisPayload",
    "kind": "LinkedField",
    "name": "updatePackagingHakedis",
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
    "name": "PackagingRelayUpdatePackagingHakedisMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PackagingRelayUpdatePackagingHakedisMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PackagingRelayUpdatePackagingHakedisMutation",
    "operationKind": "mutation",
    "text": "mutation PackagingRelayUpdatePackagingHakedisMutation(\n  $input: UpdatePackagingHakedisInput!\n) {\n  updatePackagingHakedis(input: $input) {\n    productOrder {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '38cf6c1c1093cdcbe8063abe1bf6e50d';
export default node;
