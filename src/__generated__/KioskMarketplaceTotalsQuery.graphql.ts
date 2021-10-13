/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMarketplaceTotalsQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
    qtype?: string | null;
};
export type KioskMarketplaceTotalsQueryResponse = {
    readonly marketplaceTotals: unknown | null;
};
export type KioskMarketplaceTotalsQuery = {
    readonly response: KioskMarketplaceTotalsQueryResponse;
    readonly variables: KioskMarketplaceTotalsQueryVariables;
};



/*
query KioskMarketplaceTotalsQuery(
  $startDate: DateTime
  $endDate: DateTime
  $qtype: String
) {
  marketplaceTotals(startDate: $startDate, endDate: $endDate, qtype: $qtype)
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "qtype",
    "type": "String"
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
        "name": "qtype",
        "variableName": "qtype"
      },
      {
        "kind": "Variable",
        "name": "startDate",
        "variableName": "startDate"
      }
    ],
    "kind": "ScalarField",
    "name": "marketplaceTotals",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskMarketplaceTotalsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskMarketplaceTotalsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskMarketplaceTotalsQuery",
    "operationKind": "query",
    "text": "query KioskMarketplaceTotalsQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n  $qtype: String\n) {\n  marketplaceTotals(startDate: $startDate, endDate: $endDate, qtype: $qtype)\n}\n"
  }
};
})();
(node as any).hash = '1c4b90bb6e4e516dfb432c1bd995994e';
export default node;
