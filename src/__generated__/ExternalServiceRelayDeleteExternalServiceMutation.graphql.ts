/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteExternalServiceMutationInput = {
    id: string;
    clientMutationId?: string | null;
};
export type ExternalServiceRelayDeleteExternalServiceMutationVariables = {
    input: DeleteExternalServiceMutationInput;
};
export type ExternalServiceRelayDeleteExternalServiceMutationResponse = {
    readonly deleteExternalService: {
        readonly deletedId: string | null;
    } | null;
};
export type ExternalServiceRelayDeleteExternalServiceMutation = {
    readonly response: ExternalServiceRelayDeleteExternalServiceMutationResponse;
    readonly variables: ExternalServiceRelayDeleteExternalServiceMutationVariables;
};



/*
mutation ExternalServiceRelayDeleteExternalServiceMutation(
  $input: DeleteExternalServiceMutationInput!
) {
  deleteExternalService(input: $input) {
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
    "type": "DeleteExternalServiceMutationInput!"
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
    "concreteType": "DeleteExternalServiceMutationPayload",
    "kind": "LinkedField",
    "name": "deleteExternalService",
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
    "name": "ExternalServiceRelayDeleteExternalServiceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalServiceRelayDeleteExternalServiceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExternalServiceRelayDeleteExternalServiceMutation",
    "operationKind": "mutation",
    "text": "mutation ExternalServiceRelayDeleteExternalServiceMutation(\n  $input: DeleteExternalServiceMutationInput!\n) {\n  deleteExternalService(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();
(node as any).hash = '2c67387cf23b0f832d52124c859355e4';
export default node;
