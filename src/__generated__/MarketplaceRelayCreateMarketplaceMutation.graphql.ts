/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateMarketplaceMutationInput = {
    name?: string | null;
    commissionRate?: number | null;
    deliveryDate?: number | null;
    clientMutationId?: string | null;
};
export type MarketplaceRelayCreateMarketplaceMutationVariables = {
    input: CreateMarketplaceMutationInput;
};
export type MarketplaceRelayCreateMarketplaceMutationResponse = {
    readonly createMarketplace: {
        readonly marketplace: {
            readonly id: string;
            readonly name: string;
            readonly commissionRate: number;
            readonly deliveryDate: number;
        } | null;
    } | null;
};
export type MarketplaceRelayCreateMarketplaceMutation = {
    readonly response: MarketplaceRelayCreateMarketplaceMutationResponse;
    readonly variables: MarketplaceRelayCreateMarketplaceMutationVariables;
};



/*
mutation MarketplaceRelayCreateMarketplaceMutation(
  $input: CreateMarketplaceMutationInput!
) {
  createMarketplace(input: $input) {
    marketplace {
      id
      name
      commissionRate
      deliveryDate
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
    "type": "CreateMarketplaceMutationInput!"
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
    "concreteType": "CreateMarketplaceMutationPayload",
    "kind": "LinkedField",
    "name": "createMarketplace",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketPlaceNode",
        "kind": "LinkedField",
        "name": "marketplace",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarketplaceRelayCreateMarketplaceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarketplaceRelayCreateMarketplaceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MarketplaceRelayCreateMarketplaceMutation",
    "operationKind": "mutation",
    "text": "mutation MarketplaceRelayCreateMarketplaceMutation(\n  $input: CreateMarketplaceMutationInput!\n) {\n  createMarketplace(input: $input) {\n    marketplace {\n      id\n      name\n      commissionRate\n      deliveryDate\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ef071c6a166261bc206d26ef35d8e632';
export default node;
