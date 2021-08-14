/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type LogRelayGetProductHistoryQueryVariables = {
    id?: string | null;
};
export type LogRelayGetProductHistoryQueryResponse = {
    readonly allProductOrderHistories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly updatedDate: unknown;
                readonly oldStatus: string;
                readonly newStatus: string;
                readonly user: {
                    readonly firstName: string;
                    readonly lastName: string;
                } | null;
                readonly module: string;
                readonly type: string;
            } | null;
        } | null>;
    } | null;
};
export type LogRelayGetProductHistoryQuery = {
    readonly response: LogRelayGetProductHistoryQueryResponse;
    readonly variables: LogRelayGetProductHistoryQueryVariables;
};



/*
query LogRelayGetProductHistoryQuery(
  $id: String
) {
  allProductOrderHistories(byUserOrderId: $id) {
    edges {
      node {
        updatedDate
        oldStatus
        newStatus
        user {
          firstName
          lastName
          id
        }
        module
        type
        id
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
  "name": "updatedDate",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oldStatus",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "newStatus",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "module",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogRelayGetProductHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductOrderHistoryNodeConnection",
        "kind": "LinkedField",
        "name": "allProductOrderHistories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductOrderHistoryNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductOrderHistoryNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppUserNode",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
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
    "name": "LogRelayGetProductHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductOrderHistoryNodeConnection",
        "kind": "LinkedField",
        "name": "allProductOrderHistories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductOrderHistoryNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductOrderHistoryNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppUserNode",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
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
    "name": "LogRelayGetProductHistoryQuery",
    "operationKind": "query",
    "text": "query LogRelayGetProductHistoryQuery(\n  $id: String\n) {\n  allProductOrderHistories(byUserOrderId: $id) {\n    edges {\n      node {\n        updatedDate\n        oldStatus\n        newStatus\n        user {\n          firstName\n          lastName\n          id\n        }\n        module\n        type\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '89e742ef508ff1b0a2eee0e9a9724e34';
export default node;
