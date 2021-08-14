/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetaProductMetaType = "DF" | "F" | "G" | "M" | "MT" | "WD" | "%future added value";
export type MetaProductPaintType = "DF" | "MT" | "WD" | "%future added value";
export type UpdateMetaProductMutationInput = {
    metaProduct?: MetaProductUpdateInput | null;
    clientMutationId?: string | null;
};
export type MetaProductUpdateInput = {
    categoryName?: string | null;
    materialName?: string | null;
    materialId?: number | null;
    metaType?: string | null;
    paintType?: string | null;
    id: string;
};
export type MetadataRelayUpdateMetadataMutationVariables = {
    input: UpdateMetaProductMutationInput;
};
export type MetadataRelayUpdateMetadataMutationResponse = {
    readonly updateMetaProduct: {
        readonly metaProduct: {
            readonly categoryName: MetaProductCategoryName;
            readonly materialName: string;
            readonly materialId: number | null;
            readonly metaType: MetaProductMetaType;
            readonly paintType: MetaProductPaintType;
            readonly id: string;
        } | null;
    } | null;
};
export type MetadataRelayUpdateMetadataMutation = {
    readonly response: MetadataRelayUpdateMetadataMutationResponse;
    readonly variables: MetadataRelayUpdateMetadataMutationVariables;
};



/*
mutation MetadataRelayUpdateMetadataMutation(
  $input: UpdateMetaProductMutationInput!
) {
  updateMetaProduct(input: $input) {
    metaProduct {
      categoryName
      materialName
      materialId
      metaType
      paintType
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMetaProductMutationInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateMetaProductMutationPayload",
    "kind": "LinkedField",
    "name": "updateMetaProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MetaProductNode",
        "kind": "LinkedField",
        "name": "metaProduct",
        "plural": false,
        "selections": [
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metaType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paintType",
            "storageKey": null
          },
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetadataRelayUpdateMetadataMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetadataRelayUpdateMetadataMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MetadataRelayUpdateMetadataMutation",
    "operationKind": "mutation",
    "text": "mutation MetadataRelayUpdateMetadataMutation(\n  $input: UpdateMetaProductMutationInput!\n) {\n  updateMetaProduct(input: $input) {\n    metaProduct {\n      categoryName\n      materialName\n      materialId\n      metaType\n      paintType\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b172b396e08ff936ca837e0503ce6d74';
export default node;
