/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type OrdersAllMarketplacesQueryVariables = {};
export type OrdersAllMarketplacesQueryResponse = {
    readonly allMarketplaces: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly commissionRate: number;
                readonly deliveryDate: number;
            } | null;
        } | null>;
    } | null;
};
export type OrdersAllMarketplacesQuery = {
    readonly response: OrdersAllMarketplacesQueryResponse;
    readonly variables: OrdersAllMarketplacesQueryVariables;
};



/*
query OrdersAllMarketplacesQuery {
  allMarketplaces {
    edges {
      node {
        id
        name
        commissionRate
        deliveryDate
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "MarketPlaceNodeConnection",
    "kind": "LinkedField",
    "name": "allMarketplaces",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketPlaceNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketPlaceNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "commissionRate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deliveryDate",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersAllMarketplacesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrdersAllMarketplacesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersAllMarketplacesQuery",
    "operationKind": "query",
    "text": "query OrdersAllMarketplacesQuery {\n  allMarketplaces {\n    edges {\n      node {\n        id\n        name\n        commissionRate\n        deliveryDate\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e88ee752b4e085cbca788ad9ebdca0a6';
export default node;
