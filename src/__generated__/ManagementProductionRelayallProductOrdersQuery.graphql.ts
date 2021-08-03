/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime';
export type MetaProductCategoryName =
  | 'AY'
  | 'CA'
  | 'CT'
  | 'DF'
  | 'TB'
  | '%future added value';
export type ManagementProductionRelayallProductOrdersQueryVariables = {};
export type ManagementProductionRelayallProductOrdersQueryResponse = {
  readonly allProductByProductOrderStatus: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly notes: string;
        readonly orderCount: number;
        readonly id: string;
        readonly product: {
          readonly id: string;
          readonly name: string;
          readonly productName: string;
          readonly metaProducts: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly categoryName: MetaProductCategoryName;
                readonly materialName: string;
              } | null;
            } | null>;
          };
        } | null;
        readonly userOrder: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly customerInfo: unknown;
              readonly marketplaceOrderId: string;
              readonly marketplace: {
                readonly name: string;
              } | null;
            } | null;
          } | null>;
        };
      } | null;
    } | null>;
  } | null;
};
export type ManagementProductionRelayallProductOrdersQuery = {
  readonly response: ManagementProductionRelayallProductOrdersQueryResponse;
  readonly variables: ManagementProductionRelayallProductOrdersQueryVariables;
};

/*
query ManagementProductionRelayallProductOrdersQuery {
  allProductByProductOrderStatus(statusType: "DF") {
    edges {
      node {
        notes
        orderCount
        id
        product {
          id
          name
          productName
          metaProducts {
            edges {
              node {
                categoryName
                materialName
                id
              }
            }
          }
        }
        userOrder {
          edges {
            node {
              customerInfo
              marketplaceOrderId
              marketplace {
                name
                id
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

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        kind: 'Literal',
        name: 'statusType',
        value: 'DF',
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'notes',
      storageKey: null,
    },
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'orderCount',
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'productName',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'categoryName',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'materialName',
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'customerInfo',
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'marketplaceOrderId',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'ManagementProductionRelayallProductOrdersQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ProductOrderNodeConnection',
          kind: 'LinkedField',
          name: 'allProductByProductOrderStatus',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ProductOrderNodeEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'ProductOrderNode',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    v0 /*: any*/,
                    v1 /*: any*/,
                    v2 /*: any*/,
                    v3 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ProductNode',
                      kind: 'LinkedField',
                      name: 'product',
                      plural: false,
                      selections: [
                        v2 /*: any*/,
                        v3 /*: any*/,
                        v4 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          concreteType: 'MetaProductNodeConnection',
                          kind: 'LinkedField',
                          name: 'metaProducts',
                          plural: false,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'MetaProductNodeEdge',
                              kind: 'LinkedField',
                              name: 'edges',
                              plural: true,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MetaProductNode',
                                  kind: 'LinkedField',
                                  name: 'node',
                                  plural: false,
                                  selections: [v5 /*: any*/, v6 /*: any*/],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'UserOrderNodeConnection',
                      kind: 'LinkedField',
                      name: 'userOrder',
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'UserOrderNodeEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'UserOrderNode',
                              kind: 'LinkedField',
                              name: 'node',
                              plural: false,
                              selections: [
                                v7 /*: any*/,
                                v8 /*: any*/,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MarketPlaceNode',
                                  kind: 'LinkedField',
                                  name: 'marketplace',
                                  plural: false,
                                  selections: [v3 /*: any*/],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: 'allProductByProductOrderStatus(statusType:"DF")',
        },
      ],
      type: 'Query',
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'ManagementProductionRelayallProductOrdersQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ProductOrderNodeConnection',
          kind: 'LinkedField',
          name: 'allProductByProductOrderStatus',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ProductOrderNodeEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'ProductOrderNode',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    v0 /*: any*/,
                    v1 /*: any*/,
                    v2 /*: any*/,
                    v3 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ProductNode',
                      kind: 'LinkedField',
                      name: 'product',
                      plural: false,
                      selections: [
                        v2 /*: any*/,
                        v3 /*: any*/,
                        v4 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          concreteType: 'MetaProductNodeConnection',
                          kind: 'LinkedField',
                          name: 'metaProducts',
                          plural: false,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'MetaProductNodeEdge',
                              kind: 'LinkedField',
                              name: 'edges',
                              plural: true,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MetaProductNode',
                                  kind: 'LinkedField',
                                  name: 'node',
                                  plural: false,
                                  selections: [
                                    v5 /*: any*/,
                                    v6 /*: any*/,
                                    v2 /*: any*/,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'UserOrderNodeConnection',
                      kind: 'LinkedField',
                      name: 'userOrder',
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'UserOrderNodeEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'UserOrderNode',
                              kind: 'LinkedField',
                              name: 'node',
                              plural: false,
                              selections: [
                                v7 /*: any*/,
                                v8 /*: any*/,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MarketPlaceNode',
                                  kind: 'LinkedField',
                                  name: 'marketplace',
                                  plural: false,
                                  selections: [v3 /*: any*/, v2 /*: any*/],
                                  storageKey: null,
                                },
                                v2 /*: any*/,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: 'allProductByProductOrderStatus(statusType:"DF")',
        },
      ],
    },
    params: {
      id: null,
      metadata: {},
      name: 'ManagementProductionRelayallProductOrdersQuery',
      operationKind: 'query',
      text:
        'query ManagementProductionRelayallProductOrdersQuery {\n  allProductByProductOrderStatus(statusType: "DF") {\n    edges {\n      node {\n        notes\n        orderCount\n        id\n        product {\n          id\n          name\n          productName\n          metaProducts {\n            edges {\n              node {\n                categoryName\n                materialName\n                id\n              }\n            }\n          }\n        }\n        userOrder {\n          edges {\n            node {\n              customerInfo\n              marketplaceOrderId\n              marketplace {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n',
    },
  };
})();
(node as any).hash = '1368199cfbb4e3fff8c0eaec0ed3d7a1';
export default node;
