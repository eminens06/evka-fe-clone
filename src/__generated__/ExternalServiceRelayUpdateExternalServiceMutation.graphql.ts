/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExternalServiceModule = "AS" | "F" | "GL" | "MR" | "PT" | "%future added value";
export type UpdateExternalServiceInput = {
    id: string;
    name?: string | null;
    phoneNumber?: string | null;
    module?: string | null;
    submodule?: string | null;
    address?: string | null;
    isRawMaterial?: boolean | null;
    clientMutationId?: string | null;
};
export type ExternalServiceRelayUpdateExternalServiceMutationVariables = {
    input: UpdateExternalServiceInput;
};
export type ExternalServiceRelayUpdateExternalServiceMutationResponse = {
    readonly updateExternalService: {
        readonly externalService: {
            readonly id: string;
            readonly name: string;
            readonly phoneNumber: string | null;
            readonly module: ExternalServiceModule;
            readonly address: string;
        } | null;
    } | null;
};
export type ExternalServiceRelayUpdateExternalServiceMutation = {
    readonly response: ExternalServiceRelayUpdateExternalServiceMutationResponse;
    readonly variables: ExternalServiceRelayUpdateExternalServiceMutationVariables;
};



/*
mutation ExternalServiceRelayUpdateExternalServiceMutation(
  $input: UpdateExternalServiceInput!
) {
  updateExternalService(input: $input) {
    externalService {
      id
      name
      phoneNumber
      module
      address
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
    "type": "UpdateExternalServiceInput!"
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
    "concreteType": "UpdateExternalServicePayload",
    "kind": "LinkedField",
    "name": "updateExternalService",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ExternalServiceNode",
        "kind": "LinkedField",
        "name": "externalService",
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
            "name": "phoneNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "module",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
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
    "name": "ExternalServiceRelayUpdateExternalServiceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalServiceRelayUpdateExternalServiceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalServiceRelayUpdateExternalServiceMutation",
    "operationKind": "mutation",
    "text": "mutation ExternalServiceRelayUpdateExternalServiceMutation(\n  $input: UpdateExternalServiceInput!\n) {\n  updateExternalService(input: $input) {\n    externalService {\n      id\n      name\n      phoneNumber\n      module\n      address\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '214a6d44813e30d5ae701dbed3db35cd';
export default node;
