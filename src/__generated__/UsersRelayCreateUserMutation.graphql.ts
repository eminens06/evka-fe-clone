/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateAppUserMutationInput = {
    email: string;
    password: string;
    roles?: Array<string | null> | null;
    firstName?: string | null;
    lastName?: string | null;
    clientMutationId?: string | null;
};
export type UsersRelayCreateUserMutationVariables = {
    input: CreateAppUserMutationInput;
};
export type UsersRelayCreateUserMutationResponse = {
    readonly createUser: {
        readonly user: {
            readonly id: string;
            readonly firstName: string;
            readonly lastName: string;
            readonly email: string;
        } | null;
    } | null;
};
export type UsersRelayCreateUserMutation = {
    readonly response: UsersRelayCreateUserMutationResponse;
    readonly variables: UsersRelayCreateUserMutationVariables;
};



/*
mutation UsersRelayCreateUserMutation(
  $input: CreateAppUserMutationInput!
) {
  createUser(input: $input) {
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
    "type": "CreateAppUserMutationInput!"
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
    "concreteType": "CreateAppUserMutationPayload",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "UsersRelayCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersRelayCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UsersRelayCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UsersRelayCreateUserMutation(\n  $input: CreateAppUserMutationInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a838cbbae5818a0d3f21e66cef906713';
export default node;
