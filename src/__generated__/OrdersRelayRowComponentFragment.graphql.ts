/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProductOrderType = "NR" | "SP" | "%future added value";
export type OrdersRelayRowComponentFragment = {
    readonly id: string;
    readonly type: ProductOrderType;
    readonly price: number;
    readonly notes: string;
    readonly orderCount: number;
    readonly " $refType": "OrdersRelayRowComponentFragment";
};
export type OrdersRelayRowComponentFragment$data = OrdersRelayRowComponentFragment;
export type OrdersRelayRowComponentFragment$key = {
    readonly " $data"?: OrdersRelayRowComponentFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"OrdersRelayRowComponentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrdersRelayRowComponentFragment",
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
      "name": "type",
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
      "kind": "ScalarField",
      "name": "notes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "orderCount",
      "storageKey": null
    }
  ],
  "type": "ProductOrderNode"
};
(node as any).hash = '25e2f206d46d6cc1ea10cb42142f1d02';
export default node;
