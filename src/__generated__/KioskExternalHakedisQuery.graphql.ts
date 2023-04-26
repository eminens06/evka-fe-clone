/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskExternalHakedisQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
};
export type KioskExternalHakedisQueryResponse = {
    readonly externalHakedis: unknown | null;
};
export type KioskExternalHakedisQuery = {
    readonly response: KioskExternalHakedisQueryResponse;
    readonly variables: KioskExternalHakedisQueryVariables;
};



/*
query KioskExternalHakedisQuery(
  $startDate: DateTime
  $endDate: DateTime
) {
  externalHakedis(startDate: $startDate, endDate: $endDate)
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
    "name": "externalHakedis",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskExternalHakedisQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskExternalHakedisQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskExternalHakedisQuery",
    "operationKind": "query",
    "text": "query KioskExternalHakedisQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n) {\n  externalHakedis(startDate: $startDate, endDate: $endDate)\n}\n"
  }
};
})();
(node as any).hash = '501fa6df51d32f75d2588f39f1707304';
export default node;
