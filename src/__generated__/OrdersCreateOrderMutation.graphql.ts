/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateOrderMutationInput = {
    productList?: Array<ProductOrderCreateInput | null> | null;
    userOrderInput?: UserOrderCreateInput | null;
    invoiceNo?: string | null;
    invoiceDate?: unknown | null;
    clientMutationId?: string | null;
};
export type ProductOrderCreateInput = {
    id?: string | null;
    productId?: string | null;
    shipmentId?: string | null;
    type?: string | null;
    orderDate?: unknown | null;
    price?: number | null;
    productOrderStatus?: string | null;
    notes?: string | null;
    imageId?: string | null;
    orderCount?: number | null;
    externalServiceIds?: Array<string | null> | null;
    marketplaceOrderId?: string | null;
    completedDate?: unknown | null;
};
export type UserOrderCreateInput = {
    marketplaceId?: string | null;
    commissionRate?: number | null;
    orderDeliveryTime?: number | null;
    orderDate?: unknown | null;
    type?: string | null;
    totalPrice?: number | null;
    notes?: string | null;
    invoiceDate?: unknown | null;
    invoiceNo?: number | null;
    shipmentId?: string | null;
    isKdvInclude?: boolean | null;
    customerInfo?: CustomerInfo | null;
    cargoPrice?: number | null;
    cargoChaseNumber?: string | null;
    marketplaceOrderId?: string | null;
    completedDate?: unknown | null;
    productOrderIds?: Array<string | null> | null;
    invoiceAddress?: string | null;
    deliveryAddress?: string | null;
    orderType: string;
};
export type CustomerInfo = {
    isCorporate?: boolean | null;
    name?: string | null;
    surname?: string | null;
    tc?: string | null;
    phoneNumber?: string | null;
    deliveryAddress?: string | null;
    invoiceAddress?: string | null;
};
export type OrdersCreateOrderMutationVariables = {
    input: CreateOrderMutationInput;
};
export type OrdersCreateOrderMutationResponse = {
    readonly createOrder: {
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type OrdersCreateOrderMutation = {
    readonly response: OrdersCreateOrderMutationResponse;
    readonly variables: OrdersCreateOrderMutationVariables;
};



/*
mutation OrdersCreateOrderMutation(
  $input: CreateOrderMutationInput!
) {
  createOrder(input: $input) {
    order {
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
    "type": "CreateOrderMutationInput!"
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
    "concreteType": "CreateOrderMutationPayload",
    "kind": "LinkedField",
    "name": "createOrder",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrderNode",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrdersCreateOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersCreateOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersCreateOrderMutation",
    "operationKind": "mutation",
    "text": "mutation OrdersCreateOrderMutation(\n  $input: CreateOrderMutationInput!\n) {\n  createOrder(input: $input) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3acb004fab6b726ebc2b02feea5c6499';
export default node;
