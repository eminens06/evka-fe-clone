/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ObtainJSONWebTokenInput = {
    clientMutationId?: string | null;
    email: string;
    password: string;
};
export type SignInFormRelayMutationVariables = {
    input: ObtainJSONWebTokenInput;
};
export type SignInFormRelayMutationResponse = {
    readonly tokenAuth: {
        readonly token: string;
        readonly refreshToken: string;
        readonly user: {
            readonly firstName: string;
            readonly lastName: string;
            readonly email: string;
            readonly id: string;
            readonly roles: ReadonlyArray<string>;
        } | null;
    } | null;
};
export type SignInFormRelayMutation = {
    readonly response: SignInFormRelayMutationResponse;
    readonly variables: SignInFormRelayMutationVariables;
};



/*
mutation SignInFormRelayMutation(
  $input: ObtainJSONWebTokenInput!
) {
  tokenAuth(input: $input) {
    token
    refreshToken
    user {
      firstName
      lastName
      email
      id
      roles
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
    "type": "ObtainJSONWebTokenInput!"
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
    "concreteType": "ObtainJSONWebTokenPayload",
    "kind": "LinkedField",
    "name": "tokenAuth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
        "storageKey": null
      },
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
          },
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
            "name": "roles",
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
    "name": "SignInFormRelayMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInFormRelayMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SignInFormRelayMutation",
    "operationKind": "mutation",
    "text": "mutation SignInFormRelayMutation(\n  $input: ObtainJSONWebTokenInput!\n) {\n  tokenAuth(input: $input) {\n    token\n    refreshToken\n    user {\n      firstName\n      lastName\n      email\n      id\n      roles\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f51a0e6c039a5c1f9e1b44eb5bcfc5ab';
export default node;
