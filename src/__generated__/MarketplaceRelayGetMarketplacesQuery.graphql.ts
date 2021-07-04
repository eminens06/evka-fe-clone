/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MarketplaceRelayGetMarketplacesQueryVariables = {
    search?: string | null;
};
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
query MarketplaceRelayGetMarketplacesQuery(
  $search: String
) {
  allMarketplaces(superSearch: $search) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "superSearch",
        "variableName": "search"
      }
    ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MarketplaceRelayGetMarketplacesQuery",
    "operationKind": "query",
    "text": "query MarketplaceRelayGetMarketplacesQuery(\n  $search: String\n) {\n  allMarketplaces(superSearch: $search) {\n    edges {\n      node {\n        id\n        name\n        commissionRate\n        deliveryDate\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3deae6ce559e69938344c1a688e39274';
export default node;
