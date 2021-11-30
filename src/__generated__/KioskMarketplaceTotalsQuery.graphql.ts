/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMarketplaceTotalsQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
    qtype?: string | null;
};
export type KioskMarketplaceTotalsQueryResponse = {
    readonly newMarketplaceTotal: unknown | null;
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
  newMarketplaceTotal(startDate: $startDate, endDate: $endDate, qtype: $qtype)
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
    "name": "newMarketplaceTotal",
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
    "text": "query KioskMarketplaceTotalsQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n  $qtype: String\n) {\n  newMarketplaceTotal(startDate: $startDate, endDate: $endDate, qtype: $qtype)\n}\n"
  }
};
})();
(node as any).hash = '30b4a396fd7116a1732ab8d2abfd5802';
export default node;
