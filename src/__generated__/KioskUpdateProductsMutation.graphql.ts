/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateProductsMutationInput = {
    csvData?: string | null;
};
export type KioskUpdateProductsMutationVariables = {
    input: UpdateProductsMutationInput;
};
export type KioskUpdateProductsMutationResponse = {
    readonly updateProducts: {
        readonly ok: boolean | null;
    } | null;
};
export type KioskUpdateProductsMutation = {
    readonly response: KioskUpdateProductsMutationResponse;
    readonly variables: KioskUpdateProductsMutationVariables;
};



/*
mutation KioskUpdateProductsMutation(
  $input: UpdateProductsMutationInput!
) {
  updateProducts(input: $input) {
    ok
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProductsMutationInput!"
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
    "concreteType": "UpdateProductsMutationPayload",
    "kind": "LinkedField",
    "name": "updateProducts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
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
    "name": "KioskUpdateProductsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskUpdateProductsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskUpdateProductsMutation",
    "operationKind": "mutation",
    "text": "mutation KioskUpdateProductsMutation(\n  $input: UpdateProductsMutationInput!\n) {\n  updateProducts(input: $input) {\n    ok\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f9edabf0c6379ed6d7266ba0522b5179';
export default node;
