/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductOrderProductOrderStatus = "AS" | "C" | "CC" | "D" | "DF" | "P" | "PP" | "RR" | "%future added value";
export type UserOrderOrderType = "N" | "NR" | "SP" | "ST" | "%future added value";
export type UserOrderShipmentType = "C" | "D" | "S" | "%future added value";
export type ShipmentInvoiceRelayInvoiceQueryVariables = {
    search?: string | null;
};
export type ShipmentInvoiceRelayInvoiceQueryResponse = {
    readonly allUserOrders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly notes: string;
                readonly orderType: UserOrderOrderType;
                readonly shipmentType: UserOrderShipmentType;
                readonly shipmentOrderDate: unknown | null;
                readonly shipmentCompanyName: string;
                readonly customerInfo: unknown | null;
                readonly orderStatus: string | null;
                readonly marketplaceOrderId: string;
                readonly marketplace: {
                    readonly name: string;
                } | null;
                readonly products: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly price: number;
                            readonly productOrderStatus: ProductOrderProductOrderStatus;
                            readonly product: {
                                readonly name: string;
                                readonly id: string;
                                readonly sku: string;
                                readonly kdv: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};
export type ShipmentInvoiceRelayInvoiceQuery = {
    readonly response: ShipmentInvoiceRelayInvoiceQueryResponse;
    readonly variables: ShipmentInvoiceRelayInvoiceQueryVariables;
};



/*
query ShipmentInvoiceRelayInvoiceQuery(
  $search: String
) {
  allUserOrders(byInvoiceStatus: "R", superSearch: $search) {
    edges {
      node {
        id
        notes
        orderType
        shipmentType
        shipmentOrderDate
        shipmentCompanyName
        customerInfo
        orderStatus
        marketplaceOrderId
        marketplace {
          name
          id
        }
        products {
          edges {
            node {
              price
              productOrderStatus
              product {
                name
                id
                sku
                kdv
              }
              id
            }
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
    "name": "search",
    "type": "String"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "byInvoiceStatus",
    "value": "R"
  },
  {
    "kind": "Variable",
    "name": "superSearch",
    "variableName": "search"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentOrderDate",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shipmentCompanyName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customerInfo",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderStatus",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "marketplaceOrderId",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "productOrderStatus",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "ProductNode",
  "kind": "LinkedField",
  "name": "product",
  "plural": false,
  "selections": [
    (v11/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sku",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kdv",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShipmentInvoiceRelayInvoiceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductOrderNodeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ProductOrderNode",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/)
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
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipmentInvoiceRelayInvoiceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserOrderNodeConnection",
        "kind": "LinkedField",
        "name": "allUserOrders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MarketPlaceNode",
                    "kind": "LinkedField",
                    "name": "marketplace",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductOrderNodeConnection",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductOrderNodeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ProductOrderNode",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v2/*: any*/)
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShipmentInvoiceRelayInvoiceQuery",
    "operationKind": "query",
    "text": "query ShipmentInvoiceRelayInvoiceQuery(\n  $search: String\n) {\n  allUserOrders(byInvoiceStatus: \"R\", superSearch: $search) {\n    edges {\n      node {\n        id\n        notes\n        orderType\n        shipmentType\n        shipmentOrderDate\n        shipmentCompanyName\n        customerInfo\n        orderStatus\n        marketplaceOrderId\n        marketplace {\n          name\n          id\n        }\n        products {\n          edges {\n            node {\n              price\n              productOrderStatus\n              product {\n                name\n                id\n                sku\n                kdv\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4a1907ca553d9d0574d65c01b837c1e7';
export default node;
