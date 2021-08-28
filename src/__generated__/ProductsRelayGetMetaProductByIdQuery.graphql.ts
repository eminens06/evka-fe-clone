/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductsRelayGetMetaProductByIdQueryVariables = {
    id: string;
};
export type ProductsRelayGetMetaProductByIdQueryResponse = {
    readonly metaProduct: {
        readonly materialId: number | null;
    } | null;
};
export type ProductsRelayGetMetaProductByIdQuery = {
    readonly response: ProductsRelayGetMetaProductByIdQueryResponse;
    readonly variables: ProductsRelayGetMetaProductByIdQueryVariables;
};



/*
query ProductsRelayGetMetaProductByIdQuery(
  $id: ID!
) {
  metaProduct(id: $id) {
    materialId
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductsRelayGetMetaProductByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MetaProductNode",
        "kind": "LinkedField",
        "name": "metaProduct",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductsRelayGetMetaProductByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MetaProductNode",
        "kind": "LinkedField",
        "name": "metaProduct",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductsRelayGetMetaProductByIdQuery",
    "operationKind": "query",
    "text": "query ProductsRelayGetMetaProductByIdQuery(\n  $id: ID!\n) {\n  metaProduct(id: $id) {\n    materialId\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff1a2ae0980e51f912b99dfe07d673f2';
export default node;
