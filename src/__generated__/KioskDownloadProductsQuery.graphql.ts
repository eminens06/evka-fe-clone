/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KioskDownloadProductsQueryVariables = {};
export type KioskDownloadProductsQueryResponse = {
    readonly downloadProducts: ReadonlyArray<unknown | null> | null;
};
export type KioskDownloadProductsQuery = {
    readonly response: KioskDownloadProductsQueryResponse;
    readonly variables: KioskDownloadProductsQueryVariables;
};



/*
query KioskDownloadProductsQuery {
  downloadProducts
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "downloadProducts",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KioskDownloadProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "KioskDownloadProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KioskDownloadProductsQuery",
    "operationKind": "query",
    "text": "query KioskDownloadProductsQuery {\n  downloadProducts\n}\n"
  }
};
})();
(node as any).hash = 'c5dd1d6d73e4e42ae3632e2fd3c9a75e';
export default node;
