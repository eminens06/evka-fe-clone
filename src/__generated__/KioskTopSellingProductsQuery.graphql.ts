/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskTopSellingProductsQueryVariables = {
    startDate?: unknown | null;
    endDate?: unknown | null;
    marketplaceName?: string | null;
};
export type KioskTopSellingProductsQueryResponse = {
    readonly topSellingProducts: ReadonlyArray<unknown | null> | null;
};
export type KioskTopSellingProductsQuery = {
    readonly response: KioskTopSellingProductsQueryResponse;
    readonly variables: KioskTopSellingProductsQueryVariables;
};



/*
query KioskTopSellingProductsQuery(
  $startDate: DateTime
  $endDate: DateTime
  $marketplaceName: String
) {
  topSellingProducts(startDate: $startDate, endDate: $endDate, marketplaceName: $marketplaceName)
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
    "name": "marketplaceName",
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
        "name": "marketplaceName",
        "variableName": "marketplaceName"
      },
      {
        "kind": "Variable",
        "name": "startDate",
        "variableName": "startDate"
      }
    ],
    "kind": "ScalarField",
    "name": "topSellingProducts",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskTopSellingProductsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskTopSellingProductsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskTopSellingProductsQuery",
    "operationKind": "query",
    "text": "query KioskTopSellingProductsQuery(\n  $startDate: DateTime\n  $endDate: DateTime\n  $marketplaceName: String\n) {\n  topSellingProducts(startDate: $startDate, endDate: $endDate, marketplaceName: $marketplaceName)\n}\n"
  }
};
})();
(node as any).hash = '04d6cb030419ef2c0e04db0aa84521e5';
export default node;
