/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExternalServiceModule = "AS" | "GL" | "MR" | "PT" | "%future added value";
export type CreateExternalServiceInput = {
    name: string;
    phoneNumber?: string | null;
    module?: string | null;
    address?: string | null;
    clientMutationId?: string | null;
};
export type ExternalServiceRelayCreateExternalServiceMutationVariables = {
    input: CreateExternalServiceInput;
};
export type ExternalServiceRelayCreateExternalServiceMutationResponse = {
    readonly createExternalService: {
        readonly externalService: {
            readonly name: string;
            readonly phoneNumber: string | null;
            readonly module: ExternalServiceModule;
            readonly address: string;
        } | null;
    } | null;
};
export type ExternalServiceRelayCreateExternalServiceMutation = {
    readonly response: ExternalServiceRelayCreateExternalServiceMutationResponse;
    readonly variables: ExternalServiceRelayCreateExternalServiceMutationVariables;
};



/*
mutation ExternalServiceRelayCreateExternalServiceMutation(
  $input: CreateExternalServiceInput!
) {
  createExternalService(input: $input) {
    externalService {
      name
      phoneNumber
      module
      address
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
    "type": "CreateExternalServiceInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "module",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExternalServiceRelayCreateExternalServiceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExternalServicePayload",
        "kind": "LinkedField",
        "name": "createExternalService",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalServiceRelayCreateExternalServiceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExternalServicePayload",
        "kind": "LinkedField",
        "name": "createExternalService",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalServiceRelayCreateExternalServiceMutation",
    "operationKind": "mutation",
    "text": "mutation ExternalServiceRelayCreateExternalServiceMutation(\n  $input: CreateExternalServiceInput!\n) {\n  createExternalService(input: $input) {\n    externalService {\n      name\n      phoneNumber\n      module\n      address\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '989301c8129b87adf72fb37ff73bb380';
export default node;
