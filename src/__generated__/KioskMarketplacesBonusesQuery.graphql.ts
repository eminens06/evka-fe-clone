/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMarketplacesBonusesQueryVariables = {};
export type KioskMarketplacesBonusesQueryResponse = {
    readonly marketplacesBonuses: ReadonlyArray<unknown | null> | null;
};
export type KioskMarketplacesBonusesQuery = {
    readonly response: KioskMarketplacesBonusesQueryResponse;
    readonly variables: KioskMarketplacesBonusesQueryVariables;
};



/*
query KioskMarketplacesBonusesQuery {
  marketplacesBonuses
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "marketplacesBonuses",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskMarketplacesBonusesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "KioskMarketplacesBonusesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskMarketplacesBonusesQuery",
    "operationKind": "query",
    "text": "query KioskMarketplacesBonusesQuery {\n  marketplacesBonuses\n}\n"
  }
};
})();
(node as any).hash = '9c75da95aacf0235993834bcfa88ff05';
export default node;
