/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteMarketplaceMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type MarketplaceRelayDeleteMarketplaceMutationVariables = {
    input: DeleteMarketplaceMutationInput;
};
export type MarketplaceRelayDeleteMarketplaceMutationResponse = {
    readonly deleteMarketplace: {
        readonly deletedId: string | null;
    } | null;
};
export type MarketplaceRelayDeleteMarketplaceMutation = {
    readonly response: MarketplaceRelayDeleteMarketplaceMutationResponse;
    readonly variables: MarketplaceRelayDeleteMarketplaceMutationVariables;
};



/*
mutation MarketplaceRelayDeleteMarketplaceMutation(
  $input: DeleteMarketplaceMutationInput!
) {
  deleteMarketplace(input: $input) {
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
    "type": "DeleteMarketplaceMutationInput!"
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
    "concreteType": "DeleteMarketplaceMutationPayload",
    "kind": "LinkedField",
    "name": "deleteMarketplace",
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
    "name": "MarketplaceRelayDeleteMarketplaceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarketplaceRelayDeleteMarketplaceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MarketplaceRelayDeleteMarketplaceMutation",
    "operationKind": "mutation",
    "text": "mutation MarketplaceRelayDeleteMarketplaceMutation(\n  $input: DeleteMarketplaceMutationInput!\n) {\n  deleteMarketplace(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = '2adf4b71bade0f72aabcb6a812bffcef';
export default node;
