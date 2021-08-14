/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type LogRelayGetOrderHistoryQueryVariables = {
    id?: string | null;
};
export type LogRelayGetOrderHistoryQueryResponse = {
    readonly allUserOrderHistories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly updatedDate: unknown;
                readonly oldStatus: string;
                readonly newStatus: string;
                readonly user: {
                    readonly firstName: string;
                    readonly lastName: string;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type LogRelayGetOrderHistoryQuery = {
    readonly response: LogRelayGetOrderHistoryQueryResponse;
    readonly variables: LogRelayGetOrderHistoryQueryVariables;
};



/*
query LogRelayGetOrderHistoryQuery(
  $id: String
) {
  allUserOrderHistories(byUserOrderId: $id) {
    edges {
      node {
        id
        updatedDate
        oldStatus
        newStatus
        user {
          firstName
          lastName
          id
        }
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
    "name": "id",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "byUserOrderId",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedDate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oldStatus",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "newStatus",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogRelayGetOrderHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserOrderHistoryNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrderHistories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderHistoryNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderHistoryNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppUserNode",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ],
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
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogRelayGetOrderHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserOrderHistoryNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrderHistories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderHistoryNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderHistoryNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppUserNode",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v2/*: any*/)
                    ],
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LogRelayGetOrderHistoryQuery",
    "operationKind": "query",
    "text": "query LogRelayGetOrderHistoryQuery(\n  $id: String\n) {\n  allUserOrderHistories(byUserOrderId: $id) {\n    edges {\n      node {\n        id\n        updatedDate\n        oldStatus\n        newStatus\n        user {\n          firstName\n          lastName\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '56930aca107c3715b7615e02986f4ba0';
export default node;
