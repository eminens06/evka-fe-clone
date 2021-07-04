/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UsersRelayGetAllUsersQueryVariables = {
    search?: string | null;
};
export type UsersRelayGetAllUsersQueryResponse = {
    readonly allAppUsers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly roles: ReadonlyArray<string>;
                readonly firstName: string;
                readonly lastName: string;
                readonly id: string;
                readonly email: string;
                readonly password: string;
            } | null;
        } | null>;
    } | null;
};
export type UsersRelayGetAllUsersQuery = {
    readonly response: UsersRelayGetAllUsersQueryResponse;
    readonly variables: UsersRelayGetAllUsersQueryVariables;
};



/*
query UsersRelayGetAllUsersQuery(
  $search: String
) {
  allAppUsers(superSearch: $search) {
    edges {
      node {
        roles
        firstName
        lastName
        id
        email
        password
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "superSearch",
        "variableName": "search"
      }
    ],
    "concreteType": "AppUserNodeConnection",
    "kind": "LinkedField",
    "name": "allAppUsers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AppUserNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AppUserNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "roles",
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
                "name": "id",
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
                "name": "password",
                "storageKey": null
              }
            ],
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
    "name": "UsersRelayGetAllUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersRelayGetAllUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UsersRelayGetAllUsersQuery",
    "operationKind": "query",
    "text": "query UsersRelayGetAllUsersQuery(\n  $search: String\n) {\n  allAppUsers(superSearch: $search) {\n    edges {\n      node {\n        roles\n        firstName\n        lastName\n        id\n        email\n        password\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff9bdf615195ca62d2bb3280ba66165b';
export default node;
