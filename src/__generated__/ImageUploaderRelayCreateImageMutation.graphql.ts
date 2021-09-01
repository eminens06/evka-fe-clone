/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateImageGroupMutationInput = {
    name: string;
    tags?: Array<string | null> | null;
    coverPhoto?: string | null;
    clientMutationId?: string | null;
};
export type ImageUploaderRelayCreateImageMutationVariables = {
    input: CreateImageGroupMutationInput;
};
export type ImageUploaderRelayCreateImageMutationResponse = {
    readonly createImageGroup: {
        readonly imageGroup: {
            readonly id: string;
            readonly name: string;
            readonly processed: boolean;
            readonly tags: unknown | null;
            readonly images: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly id: string;
                        readonly name: string;
                        readonly height: number | null;
                        readonly width: number | null;
                        readonly file: {
                            readonly url: string | null;
                        } | null;
                        readonly externalUrl: string | null;
                    } | null;
                } | null>;
            } | null;
        } | null;
    } | null;
};
export type ImageUploaderRelayCreateImageMutation = {
    readonly response: ImageUploaderRelayCreateImageMutationResponse;
    readonly variables: ImageUploaderRelayCreateImageMutationVariables;
};



/*
mutation ImageUploaderRelayCreateImageMutation(
  $input: CreateImageGroupMutationInput!
) {
  createImageGroup(input: $input) {
    imageGroup {
      id
      name
      processed
      tags
      images {
        edges {
          node {
            id
            name
            height
            width
            file {
              url
            }
            externalUrl
          }
        }
      }
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
    "type": "CreateImageGroupMutationInput!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateImageGroupMutationPayload",
    "kind": "LinkedField",
    "name": "createImageGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageGroupNode",
        "kind": "LinkedField",
        "name": "imageGroup",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "processed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageConnection",
            "kind": "LinkedField",
            "name": "images",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "height",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "width",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageFileType",
                        "kind": "LinkedField",
                        "name": "file",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "externalUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "name": "ImageUploaderRelayCreateImageMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ImageUploaderRelayCreateImageMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ImageUploaderRelayCreateImageMutation",
    "operationKind": "mutation",
    "text": "mutation ImageUploaderRelayCreateImageMutation(\n  $input: CreateImageGroupMutationInput!\n) {\n  createImageGroup(input: $input) {\n    imageGroup {\n      id\n      name\n      processed\n      tags\n      images {\n        edges {\n          node {\n            id\n            name\n            height\n            width\n            file {\n              url\n            }\n            externalUrl\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '02b5d590297bed80305bcce1c0c4ecfc';
export default node;
