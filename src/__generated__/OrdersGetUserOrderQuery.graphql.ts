/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type OrdersGetUserOrderQueryVariables = {
    id: string;
};
export type OrdersGetUserOrderQueryResponse = {
    readonly userOrder: {
        readonly id: string;
        readonly products: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly orderCount: number;
                    readonly price: number;
                    readonly product: {
                        readonly id: string;
                        readonly name: string;
                        readonly productName: string;
                        readonly sku: string | null;
                        readonly metaProducts: {
                            readonly edges: ReadonlyArray<{
                                readonly node: {
                                    readonly id: string;
                                    readonly categoryName: MetaProductCategoryName;
                                    readonly materialName: string;
                                    readonly materialId: number | null;
                                } | null;
                            } | null>;
                        };
                    } | null;
                } | null;
            } | null>;
        };
        readonly marketplace: {
            readonly id: string;
            readonly name: string;
            readonly commissionRate: number;
            readonly deliveryDate: number;
        } | null;
        readonly orderDate: unknown | null;
        readonly totalPrice: number;
        readonly notes: string;
        readonly customerInfo: unknown;
        readonly commissionRate: number;
        readonly orderDeliveryTime: number;
        readonly marketplaceOrderId: string;
    } | null;
};
export type OrdersGetUserOrderQuery = {
    readonly response: OrdersGetUserOrderQueryResponse;
    readonly variables: OrdersGetUserOrderQueryVariables;
};



/*
query OrdersGetUserOrderQuery(
  $id: ID!
) {
  userOrder(id: $id) {
    id
    products {
      edges {
        node {
          id
          orderCount
          price
          product {
            id
            name
            productName
            sku
            metaProducts {
              edges {
                node {
                  id
                  categoryName
                  materialName
                  materialId
                }
              }
            }
          }
        }
      }
    }
    marketplace {
      id
      name
      commissionRate
      deliveryDate
    }
    orderDate
    totalPrice
    notes
    customerInfo
    commissionRate
    orderDeliveryTime
    marketplaceOrderId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commissionRate",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "UserOrderNode",
    "kind": "LinkedField",
    "name": "userOrder",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "orderCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "product",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "productName",
                        "storageKey": null
                      },
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
                        "concreteType": "MetaProductNodeConnection",
                        "kind": "LinkedField",
                        "name": "metaProducts",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MetaProductNodeEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MetaProductNode",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "categoryName",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "materialName",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "materialId",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketPlaceNode",
        "kind": "LinkedField",
        "name": "marketplace",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "deliveryDate",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "orderDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "notes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "customerInfo",
        "storageKey": null
      },
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "orderDeliveryTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "marketplaceOrderId",
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
    "name": "OrdersGetUserOrderQuery",
    "selections": (v4/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersGetUserOrderQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersGetUserOrderQuery",
    "operationKind": "query",
    "text": "query OrdersGetUserOrderQuery(\n  $id: ID!\n) {\n  userOrder(id: $id) {\n    id\n    products {\n      edges {\n        node {\n          id\n          orderCount\n          price\n          product {\n            id\n            name\n            productName\n            sku\n            metaProducts {\n              edges {\n                node {\n                  id\n                  categoryName\n                  materialName\n                  materialId\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    marketplace {\n      id\n      name\n      commissionRate\n      deliveryDate\n    }\n    orderDate\n    totalPrice\n    notes\n    customerInfo\n    commissionRate\n    orderDeliveryTime\n    marketplaceOrderId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd85ad8ff7a27a94a95e73556b3e7fc56';
export default node;
