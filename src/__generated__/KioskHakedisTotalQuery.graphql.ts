/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskHakedisTotalQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
};
export type KioskHakedisTotalQueryResponse = {
    readonly hakedisTotal: unknown | null;
};
export type KioskHakedisTotalQuery = {
    readonly response: KioskHakedisTotalQueryResponse;
    readonly variables: KioskHakedisTotalQueryVariables;
};



/*
query KioskHakedisTotalQuery(
  $startDate: DateTime
  $endDate: DateTime
) {
  hakedisTotal(startDate: $startDate, endDate: $endDate)
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
    "name": "hakedisTotal",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskHakedisTotalQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskHakedisTotalQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskHakedisTotalQuery",
    "operationKind": "query",
    "text": "query KioskHakedisTotalQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n) {\n  hakedisTotal(startDate: $startDate, endDate: $endDate)\n}\n"
  }
};
})();
(node as any).hash = 'd4186c1a2b48ab3d9b5549b7a737298e';
export default node;
