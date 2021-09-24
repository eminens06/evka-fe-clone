/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskSellComparisonQueryVariables = {};
export type KioskSellComparisonQueryResponse = {
    readonly sellComparison: ReadonlyArray<unknown | null> | null;
};
export type KioskSellComparisonQuery = {
    readonly response: KioskSellComparisonQueryResponse;
    readonly variables: KioskSellComparisonQueryVariables;
};



/*
query KioskSellComparisonQuery {
  sellComparison
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "sellComparison",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskSellComparisonQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "KioskSellComparisonQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskSellComparisonQuery",
    "operationKind": "query",
    "text": "query KioskSellComparisonQuery {\n  sellComparison\n}\n"
  }
};
})();
(node as any).hash = '748869c97966f21f2ee9a71fa330d305';
export default node;
