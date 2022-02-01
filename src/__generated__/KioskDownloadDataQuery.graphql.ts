/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskDownloadDataQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
};
export type KioskDownloadDataQueryResponse = {
    readonly download: ReadonlyArray<unknown | null> | null;
};
export type KioskDownloadDataQuery = {
    readonly response: KioskDownloadDataQueryResponse;
    readonly variables: KioskDownloadDataQueryVariables;
};



/*
query KioskDownloadDataQuery(
  $startDate: DateTime
  $endDate: DateTime
) {
  download(startDate: $startDate, endDate: $endDate)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "startDate",
    "type": "DateTime"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "endDate",
    "type": "DateTime"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "endDate",
        "variableName": "endDate"
      },
      {
        "kind": "Variable",
        "name": "startDate",
        "variableName": "startDate"
      }
    ],
    "kind": "ScalarField",
    "name": "download",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskDownloadDataQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskDownloadDataQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskDownloadDataQuery",
    "operationKind": "query",
    "text": "query KioskDownloadDataQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n) {\n  download(startDate: $startDate, endDate: $endDate)\n}\n"
  }
};
})();
(node as any).hash = 'c4c9c40a6f7a99212dbc0227034681eb';
export default node;
