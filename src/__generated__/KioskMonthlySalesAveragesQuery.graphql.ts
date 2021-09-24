/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskMonthlySalesAveragesQueryVariables = {};
export type KioskMonthlySalesAveragesQueryResponse = {
    readonly monthlySalesAverages: ReadonlyArray<number | null> | null;
};
export type KioskMonthlySalesAveragesQuery = {
    readonly response: KioskMonthlySalesAveragesQueryResponse;
    readonly variables: KioskMonthlySalesAveragesQueryVariables;
};



/*
query KioskMonthlySalesAveragesQuery {
  monthlySalesAverages
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "monthlySalesAverages",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskMonthlySalesAveragesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "KioskMonthlySalesAveragesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskMonthlySalesAveragesQuery",
    "operationKind": "query",
    "text": "query KioskMonthlySalesAveragesQuery {\n  monthlySalesAverages\n}\n"
  }
};
})();
(node as any).hash = '247344876141529574cd1be4f396b220';
export default node;
