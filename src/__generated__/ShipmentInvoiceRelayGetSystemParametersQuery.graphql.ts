/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ShipmentInvoiceRelayGetSystemParametersQueryVariables = {};
export type ShipmentInvoiceRelayGetSystemParametersQueryResponse = {
    readonly allSystemParams: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly otherParams: {
                    readonly kdv1: number | null;
                    readonly kdv2: number | null;
                    readonly kdv3: number | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type ShipmentInvoiceRelayGetSystemParametersQuery = {
    readonly response: ShipmentInvoiceRelayGetSystemParametersQueryResponse;
    readonly variables: ShipmentInvoiceRelayGetSystemParametersQueryVariables;
};



/*
query ShipmentInvoiceRelayGetSystemParametersQuery {
  allSystemParams {
    edges {
      node {
        otherParams {
          kdv1
          kdv2
          kdv3
        }
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "OtherParamsFieldNode",
  "kind": "LinkedField",
  "name": "otherParams",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kdv1",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kdv2",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kdv3",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShipmentInvoiceRelayGetSystemParametersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SystemParamNodeConnection",
        "kind": "LinkedField",
        "name": "allSystemParams",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SystemParamNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SystemParamNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
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
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayGetSystemParametersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SystemParamNodeConnection",
        "kind": "LinkedField",
        "name": "allSystemParams",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SystemParamNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SystemParamNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayGetSystemParametersQuery",
    "operationKind": "query",
    "text": "query ShipmentInvoiceRelayGetSystemParametersQuery {\n  allSystemParams {\n    edges {\n      node {\n        otherParams {\n          kdv1\n          kdv2\n          kdv3\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f0af9608e7e75bfc281d36c74b1e1ee6';
export default node;
