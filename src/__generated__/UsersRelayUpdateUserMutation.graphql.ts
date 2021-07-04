/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateAppUserMutationInput = {
    id: string;
    roles?: Array<string | null> | null;
    password?: string | null;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    clientMutationId?: string | null;
};
export type UsersRelayUpdateUserMutationVariables = {
    input: UpdateAppUserMutationInput;
};
export type UsersRelayUpdateUserMutationResponse = {
    readonly updateUser: {
        readonly user: {
            readonly id: string;
            readonly firstName: string;
            readonly lastName: string;
            readonly email: string;
        } | null;
    } | null;
};
export type UsersRelayUpdateUserMutation = {
    readonly response: UsersRelayUpdateUserMutationResponse;
    readonly variables: UsersRelayUpdateUserMutationVariables;
};



/*
mutation UsersRelayUpdateUserMutation(
  $input: UpdateAppUserMutationInput!
) {
  updateUser(input: $input) {
    user {
      id
      firstName
      lastName
      email
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
    "type": "UpdateAppUserMutationInput!"
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
    "concreteType": "UpdateAppUserMutationPayload",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AppUserNode",
        "kind": "LinkedField",
        "name": "user",
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
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
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
    "name": "UsersRelayUpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersRelayUpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UsersRelayUpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UsersRelayUpdateUserMutation(\n  $input: UpdateAppUserMutationInput!\n) {\n  updateUser(input: $input) {\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6a12e0e884fbb6022141b68d2623153f';
export default node;
