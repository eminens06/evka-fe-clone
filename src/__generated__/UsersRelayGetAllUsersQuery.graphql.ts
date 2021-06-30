/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UsersRelayGetAllUsersQueryVariables = {};
export type UsersRelayGetAllUsersQueryResponse = {
    readonly allAppUsers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly roles: ReadonlyArray<string>;
                readonly firstName: string;
                readonly lastName: string;
                readonly id: string;
                readonly email: string;
            } | null;
        } | null>;
    } | null;
};
export type UsersRelayGetAllUsersQuery = {
    readonly response: UsersRelayGetAllUsersQueryResponse;
    readonly variables: UsersRelayGetAllUsersQueryVariables;
};



/*
query UsersRelayGetAllUsersQuery {
  allAppUsers {
    edges {
      node {
        roles
        firstName
        lastName
        id
        email
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersRelayGetAllUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersRelayGetAllUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UsersRelayGetAllUsersQuery",
    "operationKind": "query",
    "text": "query UsersRelayGetAllUsersQuery {\n  allAppUsers {\n    edges {\n      node {\n        roles\n        firstName\n        lastName\n        id\n        email\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '91a06a02d24fa881dc0e48d32761a3bb';
export default node;
