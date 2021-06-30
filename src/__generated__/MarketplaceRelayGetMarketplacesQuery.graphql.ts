/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MarketplaceRelayGetMarketplacesQueryVariables = {};
export type MarketplaceRelayGetMarketplacesQueryResponse = {
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
export type MarketplaceRelayGetMarketplacesQuery = {
    readonly response: MarketplaceRelayGetMarketplacesQueryResponse;
    readonly variables: MarketplaceRelayGetMarketplacesQueryVariables;
};



/*
query MarketplaceRelayGetMarketplacesQuery {
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
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "operationKind": "query",
    "text": "query MarketplaceRelayGetMarketplacesQuery {\n  allMarketplaces {\n    edges {\n      node {\n        id\n        name\n        commissionRate\n        deliveryDate\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e7e42cdd16ec3bb8fe08d90dec6782d9';
export default node;
