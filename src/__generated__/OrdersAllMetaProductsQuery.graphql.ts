/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type OrdersAllMetaProductsQueryVariables = {};
export type OrdersAllMetaProductsQueryResponse = {
    readonly allMetaProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly categoryName: MetaProductCategoryName;
                readonly materialName: string;
                readonly materialId: number | null;
            } | null;
        } | null>;
    } | null;
};
export type OrdersAllMetaProductsQuery = {
    readonly response: OrdersAllMetaProductsQueryResponse;
    readonly variables: OrdersAllMetaProductsQueryVariables;
};



/*
query OrdersAllMetaProductsQuery {
  allMetaProducts {
    edges {
      node {
        id
        categoryName
        materialName
        materialId
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
    "concreteType": "MetaProductNodeConnection",
    "kind": "LinkedField",
    "name": "allMetaProducts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MetaProductNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MetaProductNode",
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
                "name": "categoryName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "materialName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "materialId",
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
    "name": "OrdersAllMetaProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrdersAllMetaProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersAllMetaProductsQuery",
    "operationKind": "query",
    "text": "query OrdersAllMetaProductsQuery {\n  allMetaProducts {\n    edges {\n      node {\n        id\n        categoryName\n        materialName\n        materialId\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3910506576e7f15c4ef6e0b66d20ffd2';
export default node;
