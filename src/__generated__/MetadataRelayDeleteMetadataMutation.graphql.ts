/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteMetaProductMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type MetadataRelayDeleteMetadataMutationVariables = {
    input: DeleteMetaProductMutationInput;
};
export type MetadataRelayDeleteMetadataMutationResponse = {
    readonly deleteMetaProduct: {
        readonly deletedId: string;
    } | null;
};
export type MetadataRelayDeleteMetadataMutation = {
    readonly response: MetadataRelayDeleteMetadataMutationResponse;
    readonly variables: MetadataRelayDeleteMetadataMutationVariables;
};



/*
mutation MetadataRelayDeleteMetadataMutation(
  $input: DeleteMetaProductMutationInput!
) {
  deleteMetaProduct(input: $input) {
    deletedId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteMetaProductMutationInput!"
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
    "concreteType": "DeleteMetaProductMutationPayload",
    "kind": "LinkedField",
    "name": "deleteMetaProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "MetadataRelayDeleteMetadataMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetadataRelayDeleteMetadataMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MetadataRelayDeleteMetadataMutation",
    "operationKind": "mutation",
    "text": "mutation MetadataRelayDeleteMetadataMutation(\n  $input: DeleteMetaProductMutationInput!\n) {\n  deleteMetaProduct(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = '3cc70f8e6fc85fbddd242ec26f6fffbd';
export default node;
