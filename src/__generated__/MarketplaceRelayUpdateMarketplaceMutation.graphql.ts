/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateMarketPlaceMutationInput = {
    id: string;
    name?: string | null;
    phoneNumber?: string | null;
    commissionRate?: number | null;
    deliveryDate?: number | null;
    clientMutationId?: string | null;
};
export type MarketplaceRelayUpdateMarketplaceMutationVariables = {
    input: UpdateMarketPlaceMutationInput;
};
export type MarketplaceRelayUpdateMarketplaceMutationResponse = {
    readonly updateMarketplace: {
        readonly marketplace: {
            readonly id: string;
            readonly name: string;
            readonly commissionRate: number;
            readonly deliveryDate: number;
        } | null;
    } | null;
};
export type MarketplaceRelayUpdateMarketplaceMutation = {
    readonly response: MarketplaceRelayUpdateMarketplaceMutationResponse;
    readonly variables: MarketplaceRelayUpdateMarketplaceMutationVariables;
};



/*
mutation MarketplaceRelayUpdateMarketplaceMutation(
  $input: UpdateMarketPlaceMutationInput!
) {
  updateMarketplace(input: $input) {
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
    "type": "UpdateMarketPlaceMutationInput!"
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
    "concreteType": "UpdateMarketPlaceMutationPayload",
    "kind": "LinkedField",
    "name": "updateMarketplace",
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
    "name": "MarketplaceRelayUpdateMarketplaceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarketplaceRelayUpdateMarketplaceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MarketplaceRelayUpdateMarketplaceMutation",
    "operationKind": "mutation",
    "text": "mutation MarketplaceRelayUpdateMarketplaceMutation(\n  $input: UpdateMarketPlaceMutationInput!\n) {\n  updateMarketplace(input: $input) {\n    marketplace {\n      id\n      name\n      commissionRate\n      deliveryDate\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '62acf97889da1fa40aaf586ebe7d3e12';
export default node;
