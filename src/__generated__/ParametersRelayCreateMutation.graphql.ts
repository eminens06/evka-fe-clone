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
    fiyat?: number | null;
    sarfKatsayisi?: number | null;
    fireKatsayisi?: number | null;
    paslanmazKatsayisi?: number | null;
    bukumFiyat?: number | null;
    statikBoyaKatsayisi?: number | null;
    eskitmeParlakPrincKatsayisi?: number | null;
};
export type WoodParamInput = {
    mdfFiyat?: number | null;
    mdfFireKatsayisi?: number | null;
    mdfLamFiyat?: number | null;
    ahsapKaplamaFiyat?: number | null;
    ahsapKaplamaFireKatsayisi?: number | null;
    ahsapAstarKaplamaFireKatsayisi?: number | null;
    ahsapAstarKaplamaFiyat?: number | null;
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
    masifPanelFiyati?: number | null;
    kontraplakFiyati?: number | null;
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
    kutu?: number | null;
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
    genelGiderler?: number | null;
    reklamGiderler?: number | null;
    barem1?: number | null;
    barem2?: number | null;
    barem3?: number | null;
    evkaBaremMultiplier?: number | null;
    hepsiBaremMultiplier?: number | null;
    tepeBaremMultiplier?: number | null;
    trendBaremMultiplier?: number | null;
    amazonBaremMultiplier?: number | null;
    vivenseBaremMultiplier?: number | null;
};
export type ParametersRelayCreateMutationVariables = {
    input: SystemParamMutationInput;
};
export type ParametersRelayCreateMutationResponse = {
    readonly systemParamUpdateCreateMutation: {
        readonly systemParam: {
            readonly id: string;
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
    "text": "mutation ParametersRelayCreateMutation(\n  $input: SystemParamMutationInput!\n) {\n  systemParamUpdateCreateMutation(input: $input) {\n    systemParam {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '85e8afb0ecd5f237d10b5a54c45f71c8';
export default node;
