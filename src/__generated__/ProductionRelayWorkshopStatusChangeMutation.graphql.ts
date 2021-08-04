/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ChangeOrderStatusesInput = {
    productOrderId: string;
    workshopType: string;
    isComplete: boolean;
    categoryName?: string | null;
    externalServiceIds?: string | null;
    rawMaterial?: string | null;
    clientMutationId?: string | null;
};
export type ProductionRelayWorkshopStatusChangeMutationVariables = {
    input: ChangeOrderStatusesInput;
};
export type ProductionRelayWorkshopStatusChangeMutationResponse = {
    readonly changeOrderStatuses: {
        readonly productOrder: {
            readonly id: string;
            readonly woodStatus: string | null;
            readonly metalStatus: string | null;
            readonly marbleStatus: string | null;
        } | null;
    } | null;
};
export type ProductionRelayWorkshopStatusChangeMutation = {
    readonly response: ProductionRelayWorkshopStatusChangeMutationResponse;
    readonly variables: ProductionRelayWorkshopStatusChangeMutationVariables;
};



/*
mutation ProductionRelayWorkshopStatusChangeMutation(
  $input: ChangeOrderStatusesInput!
) {
  changeOrderStatuses(input: $input) {
    productOrder {
      id
      woodStatus
      metalStatus
      marbleStatus
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
    "type": "ChangeOrderStatusesInput!"
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
    "concreteType": "ChangeOrderStatusesPayload",
    "kind": "LinkedField",
    "name": "changeOrderStatuses",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductOrderNode",
        "kind": "LinkedField",
        "name": "productOrder",
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
            "name": "woodStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metalStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "marbleStatus",
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
    "name": "ProductionRelayWorkshopStatusChangeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductionRelayWorkshopStatusChangeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductionRelayWorkshopStatusChangeMutation",
    "operationKind": "mutation",
    "text": "mutation ProductionRelayWorkshopStatusChangeMutation(\n  $input: ChangeOrderStatusesInput!\n) {\n  changeOrderStatuses(input: $input) {\n    productOrder {\n      id\n      woodStatus\n      metalStatus\n      marbleStatus\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8568201e6bd1b233aadb557375ff29be';
export default node;
