/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMarketplacesBonusesQueryVariables = {
    queryMonth?: number | null;
};
export type KioskMarketplacesBonusesQueryResponse = {
    readonly marketplacesBonuses: ReadonlyArray<unknown | null> | null;
};
export type KioskMarketplacesBonusesQuery = {
    readonly response: KioskMarketplacesBonusesQueryResponse;
    readonly variables: KioskMarketplacesBonusesQueryVariables;
};



/*
query KioskMarketplacesBonusesQuery(
  $queryMonth: Int
) {
  marketplacesBonuses(queryMonth: $queryMonth)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "queryMonth",
    "type": "Int"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "queryMonth",
        "variableName": "queryMonth"
      }
    ],
    "kind": "ScalarField",
    "name": "marketplacesBonuses",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskMarketplacesBonusesQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KioskMarketplacesBonusesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskMarketplacesBonusesQuery",
    "operationKind": "query",
    "text": "query KioskMarketplacesBonusesQuery(\n  $queryMonth: Int\n) {\n  marketplacesBonuses(queryMonth: $queryMonth)\n}\n"
  }
};
})();
(node as any).hash = 'd9e1ab515d9938a9578a83307274dcd8';
export default node;
