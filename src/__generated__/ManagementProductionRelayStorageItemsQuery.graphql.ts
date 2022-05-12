/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ManagementProductionRelayStorageItemsQueryVariables = {
    sku?: string | null;
};
export type ManagementProductionRelayStorageItemsQueryResponse = {
    readonly storageItems: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly location: string;
                readonly count: number;
                readonly missingParts: ReadonlyArray<string>;
                readonly product: {
                    readonly name: string;
                    readonly id: string;
                };
            } | null;
        } | null>;
    } | null;
};
export type ManagementProductionRelayStorageItemsQuery = {
    readonly response: ManagementProductionRelayStorageItemsQueryResponse;
    readonly variables: ManagementProductionRelayStorageItemsQueryVariables;
};



/*
query ManagementProductionRelayStorageItemsQuery(
  $sku: String
) {
  storageItems(isProductExist: $sku) {
    edges {
      node {
        id
        location
        count
        missingParts
        product {
          name
          id
        }
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
    "name": "sku",
    "type": "String"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "isProductExist",
        "variableName": "sku"
      }
    ],
    "concreteType": "StorageNodeConnection",
    "kind": "LinkedField",
    "name": "storageItems",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StorageNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StorageNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "location",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "count",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "missingParts",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductNode",
                "kind": "LinkedField",
                "name": "product",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
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
    "name": "ManagementProductionRelayStorageItemsQuery",
    "selections": (v2/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagementProductionRelayStorageItemsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ManagementProductionRelayStorageItemsQuery",
    "operationKind": "query",
    "text": "query ManagementProductionRelayStorageItemsQuery(\n  $sku: String\n) {\n  storageItems(isProductExist: $sku) {\n    edges {\n      node {\n        id\n        location\n        count\n        missingParts\n        product {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5014635ecea452f239d8a16cc5d97d39';
export default node;
