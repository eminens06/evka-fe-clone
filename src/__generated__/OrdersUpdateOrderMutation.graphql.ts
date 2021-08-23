/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateOrderMutationInput = {
    productList?: Array<ProductOrderCreateInput | null> | null;
    userOrderInput?: UserOrderCreateInput | null;
    invoiceNo?: string | null;
    invoiceDate?: unknown | null;
    orderId: string;
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
export type OrdersUpdateOrderMutationVariables = {
    input: UpdateOrderMutationInput;
};
export type OrdersUpdateOrderMutationResponse = {
    readonly updateOrder: {
        readonly order: {
            readonly id: string;
        } | null;
    } | null;
};
export type OrdersUpdateOrderMutation = {
    readonly response: OrdersUpdateOrderMutationResponse;
    readonly variables: OrdersUpdateOrderMutationVariables;
};



/*
mutation OrdersUpdateOrderMutation(
  $input: UpdateOrderMutationInput!
) {
  updateOrder(input: $input) {
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
    "type": "UpdateOrderMutationInput!"
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
    "concreteType": "UpdateOrderMutationPayload",
    "kind": "LinkedField",
    "name": "updateOrder",
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
    "name": "OrdersUpdateOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrdersUpdateOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OrdersUpdateOrderMutation",
    "operationKind": "mutation",
    "text": "mutation OrdersUpdateOrderMutation(\n  $input: UpdateOrderMutationInput!\n) {\n  updateOrder(input: $input) {\n    order {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2aa50349f1efeaa87ed94822d5a018bb';
export default node;
