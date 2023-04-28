/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMainCostQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
};
export type KioskMainCostQueryResponse = {
    readonly mainCost: unknown | null;
};
export type KioskMainCostQuery = {
    readonly response: KioskMainCostQueryResponse;
    readonly variables: KioskMainCostQueryVariables;
};



/*
query KioskMainCostQuery(
  $startDate: DateTime
  $endDate: DateTime
) {
  mainCost(startDate: $startDate, endDate: $endDate)
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
    "name": "mainCost",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskMainCostQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskMainCostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskMainCostQuery",
    "operationKind": "query",
    "text": "query KioskMainCostQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n) {\n  mainCost(startDate: $startDate, endDate: $endDate)\n}\n"
  }
};
})();
(node as any).hash = '48c56150409c8ea8b55c89a995c10d10';
export default node;
