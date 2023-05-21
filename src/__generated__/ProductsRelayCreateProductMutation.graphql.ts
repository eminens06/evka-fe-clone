/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateProductMutationInput = {
    product?: ProductCreateInput | null;
    clientMutationId?: string | null;
};
export type ProductCreateInput = {
    name?: string | null;
    productName?: string | null;
    metaProductIds: Array<string | null>;
    imageIds?: Array<string | null> | null;
    isCollectable?: boolean | null;
    sku: string;
    packageCount?: number | null;
    metalAttributes?: MetalAttributeInput | null;
    woodAttributes?: WoodAttributeInput | null;
    otherAttributes?: OtherAttributeInput | null;
    other?: OtherInput | null;
    labor?: LaborAttributeInputs | null;
    aluminiumPrice?: number | null;
    sivamaPrice?: number | null;
    silikonHirdavatPrice?: number | null;
    aksesuarPrice?: number | null;
    packingPrice?: number | null;
    width?: number | null;
    height?: number | null;
    length?: number | null;
    kdv?: string | null;
};
export type MetalAttributeInput = {
    profil?: number | null;
    paslanmaz?: number | null;
    lazer?: number | null;
    statikBoya?: number | null;
    parlakEskitmePrinc?: number | null;
    bukum?: number | null;
};
export type WoodAttributeInput = {
    mdfLam?: number | null;
    mdfkp?: number | null;
    papel?: number | null;
    laminant?: number | null;
    cumba?: number | null;
    balon?: number | null;
    torna?: number | null;
    digerKereste?: number | null;
    kayinKereste?: number | null;
    hamMdf?: number | null;
    masifPanel?: number | null;
    masifPanelFiyat?: number | null;
    kontplak?: number | null;
    kontplakFiyat?: number | null;
    lake?: number | null;
    cila?: number | null;
};
export type OtherAttributeInput = {
    mermer?: number | null;
    mermerIscilik?: number | null;
    mermerFarklari?: number | null;
    cam4mm?: number | null;
    cam10mm?: number | null;
    camAynaFazlalik?: number | null;
    kumas?: number | null;
};
export type OtherInput = {
    aliminyumDokum?: number | null;
    silikonHirdavat?: number | null;
    sivama?: number | null;
    ambalajMalzeme?: number | null;
    aksesuar?: number | null;
    akrilikTipi?: string | null;
    akrilik?: number | null;
};
export type LaborAttributeInputs = {
    metal?: number | null;
    tasima?: number | null;
    toplama?: number | null;
    ahsapAtolyesi?: number | null;
    polisaj?: number | null;
    doseme?: number | null;
    akrilik?: number | null;
    ambalaj?: number | null;
    kutu?: number | null;
};
export type ProductsRelayCreateProductMutationVariables = {
    input: CreateProductMutationInput;
};
export type ProductsRelayCreateProductMutationResponse = {
    readonly createProduct: {
        readonly product: {
            readonly id: string;
        } | null;
    } | null;
};
export type ProductsRelayCreateProductMutation = {
    readonly response: ProductsRelayCreateProductMutationResponse;
    readonly variables: ProductsRelayCreateProductMutationVariables;
};



/*
mutation ProductsRelayCreateProductMutation(
  $input: CreateProductMutationInput!
) {
  createProduct(input: $input) {
    product {
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
    "type": "CreateProductMutationInput!"
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
    "concreteType": "CreateProductMutationPayload",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductNode",
        "kind": "LinkedField",
        "name": "product",
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
    "name": "ProductsRelayCreateProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductsRelayCreateProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductsRelayCreateProductMutation",
    "operationKind": "mutation",
    "text": "mutation ProductsRelayCreateProductMutation(\n  $input: CreateProductMutationInput!\n) {\n  createProduct(input: $input) {\n    product {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a5e063b42e3653e3ceda4e6a5f3df132';
export default node;
