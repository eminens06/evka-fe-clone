/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteAppUserMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type UsersRelayDeleteMarketplaceMutationVariables = {
    input: DeleteAppUserMutationInput;
};
export type UsersRelayDeleteMarketplaceMutationResponse = {
    readonly deleteUser: {
        readonly deletedUserId: string;
    } | null;
};
export type UsersRelayDeleteMarketplaceMutation = {
    readonly response: UsersRelayDeleteMarketplaceMutationResponse;
    readonly variables: UsersRelayDeleteMarketplaceMutationVariables;
};



/*
mutation UsersRelayDeleteMarketplaceMutation(
  $input: DeleteAppUserMutationInput!
) {
  deleteUser(input: $input) {
    deletedUserId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteAppUserMutationInput!"
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
    "concreteType": "DeleteAppUserMutationPayload",
    "kind": "LinkedField",
    "name": "deleteUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedUserId",
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
    "name": "UsersRelayDeleteMarketplaceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersRelayDeleteMarketplaceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UsersRelayDeleteMarketplaceMutation",
    "operationKind": "mutation",
    "text": "mutation UsersRelayDeleteMarketplaceMutation(\n  $input: DeleteAppUserMutationInput!\n) {\n  deleteUser(input: $input) {\n    deletedUserId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd139e888bb888e914f6e18c5cead9596';
export default node;
