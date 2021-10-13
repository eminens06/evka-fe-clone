/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExternalServiceModule = "AS" | "F" | "GL" | "MR" | "PT" | "%future added value";
export type ExternalServiceRelayGetExternalServiceQueryVariables = {
    search?: string | null;
    byModuleName?: string | null;
};
export type ExternalServiceRelayGetExternalServiceQueryResponse = {
    readonly allExternalServices: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly phoneNumber: string | null;
                readonly address: string;
                readonly module: ExternalServiceModule;
                readonly isRawMaterial: boolean;
                readonly submodule: string;
            } | null;
        } | null>;
    } | null;
};
export type ExternalServiceRelayGetExternalServiceQuery = {
    readonly response: ExternalServiceRelayGetExternalServiceQueryResponse;
    readonly variables: ExternalServiceRelayGetExternalServiceQueryVariables;
};



/*
query ExternalServiceRelayGetExternalServiceQuery(
  $search: String
  $byModuleName: String
) {
  allExternalServices(superSearch: $search, byModuleName: $byModuleName) {
    edges {
      node {
        id
        name
        phoneNumber
        address
        module
        isRawMaterial
        submodule
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "byModuleName",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "byModuleName",
        "variableName": "byModuleName"
      },
      {
        "kind": "Variable",
        "name": "superSearch",
        "variableName": "search"
      }
    ],
    "concreteType": "ExternalServiceNodeConnection",
    "kind": "LinkedField",
    "name": "allExternalServices",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ExternalServiceNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExternalServiceNode",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phoneNumber",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "module",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isRawMaterial",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "submodule",
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
    "name": "ExternalServiceRelayGetExternalServiceQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalServiceRelayGetExternalServiceQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalServiceRelayGetExternalServiceQuery",
    "operationKind": "query",
    "text": "query ExternalServiceRelayGetExternalServiceQuery(\n  $search: String\n  $byModuleName: String\n) {\n  allExternalServices(superSearch: $search, byModuleName: $byModuleName) {\n    edges {\n      node {\n        id\n        name\n        phoneNumber\n        address\n        module\n        isRawMaterial\n        submodule\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3d0e78113bb4a334463b6d3ff616cf61';
export default node;
