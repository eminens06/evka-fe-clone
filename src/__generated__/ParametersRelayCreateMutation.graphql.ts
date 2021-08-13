/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type SystemParamMutationInput = {
    systemParamInput?: SystemParamCreateInput | null;
    clientMutationId?: string | null;
};
export type SystemParamCreateInput = {
    id?: string | null;
    metalParams?: MetalParamInput | null;
    woodParams?: WoodParamInput | null;
    laborParams?: LaborParamInput | null;
    otherWorkshopParams?: OtherWorkshopParamInput | null;
    otherParams?: OtherParamInput | null;
};
export type MetalParamInput = {
    fiyat?: boolean | null;
    sarfKatsayisi?: number | null;
    fireKatsayisi?: number | null;
    paslanmazKatsayisi?: number | null;
    bukumFiyat?: number | null;
    statikBoyaKatsayisi?: number | null;
    eskitmePrincKatsayisi?: number | null;
    parlakPrincKatsayisi?: number | null;
};
export type WoodParamInput = {
    mdfFiyat?: number | null;
    mdfFireKatsayisi?: number | null;
    mdfLamFiyat?: number | null;
    ahsapKaplamaFiyat?: number | null;
    ahsapAstarKaplamaFireKatsayisi?: number | null;
    astarBasimFiyati?: number | null;
    papelFiyat?: number | null;
    laminantFiyat?: number | null;
    cumbaFiyat?: number | null;
    cumbaFireKatsayisi?: number | null;
    cumbaIscilik?: number | null;
    balonFiyat?: number | null;
    tornaFiyatKatsayisi?: number | null;
    keresteFiyat?: number | null;
    keresteFireKatsayisi?: number | null;
    digerKeresteFiyati?: number | null;
    digerKeresteFireKatsayisi?: number | null;
    keresteKaplamaCilaFiyat?: number | null;
    lakeBoyaFiyat?: number | null;
};
export type LaborParamInput = {
    metal?: number | null;
    tasima?: number | null;
    toplama?: number | null;
    ahsap?: number | null;
    polisaj?: number | null;
    dosemeIscilikKatsayisi?: number | null;
    akrilik?: number | null;
    ambalaj?: number | null;
    mermer?: number | null;
};
export type OtherWorkshopParamInput = {
    mermerFiyat?: number | null;
    ozelMermerKatsayisi?: number | null;
    kumasFiyat?: number | null;
    camFiyat?: number | null;
    mm4Katsayisi?: number | null;
    mm10Katsayisi?: number | null;
    aynaKatsayisi?: number | null;
};
export type OtherParamInput = {
    kdv1?: number | null;
    kdv2?: number | null;
    kdv3?: number | null;
    silikon?: number | null;
    aksesuarFiyatKatsayisi?: number | null;
    akrilik?: number | null;
    ambalajMalzeme?: number | null;
    aliminyumDokumFiyatKatsayisi?: number | null;
    sivamaFiyatKatsayisi?: number | null;
    nakliyeFiyat?: number | null;
    fahisKatsayisi?: number | null;
};
export type ParametersRelayCreateMutationVariables = {
    input: SystemParamMutationInput;
};
export type ParametersRelayCreateMutationResponse = {
    readonly systemParamUpdateCreateMutation: {
        readonly systemParam: {
            readonly id: string;
            readonly metalParams: unknown | null;
            readonly woodParams: unknown | null;
            readonly laborParams: unknown | null;
            readonly otherWorkshopParams: unknown | null;
            readonly otherParams: unknown | null;
        } | null;
    } | null;
};
export type ParametersRelayCreateMutation = {
    readonly response: ParametersRelayCreateMutationResponse;
    readonly variables: ParametersRelayCreateMutationVariables;
};



/*
mutation ParametersRelayCreateMutation(
  $input: SystemParamMutationInput!
) {
  systemParamUpdateCreateMutation(input: $input) {
    systemParam {
      id
      metalParams
      woodParams
      laborParams
      otherWorkshopParams
      otherParams
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
    "type": "SystemParamMutationInput!"
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
    "concreteType": "SystemParamMutationPayload",
    "kind": "LinkedField",
    "name": "systemParamUpdateCreateMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SystemParamNode",
        "kind": "LinkedField",
        "name": "systemParam",
        "plural": false,
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
            "name": "metalParams",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "woodParams",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "laborParams",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "otherWorkshopParams",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "otherParams",
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
    "name": "ParametersRelayCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ParametersRelayCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ParametersRelayCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ParametersRelayCreateMutation(\n  $input: SystemParamMutationInput!\n) {\n  systemParamUpdateCreateMutation(input: $input) {\n    systemParam {\n      id\n      metalParams\n      woodParams\n      laborParams\n      otherWorkshopParams\n      otherParams\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b1aa8b6572669b566cd7bb0f0c057ee4';
export default node;
