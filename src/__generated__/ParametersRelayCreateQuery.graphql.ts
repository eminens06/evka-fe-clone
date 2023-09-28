/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ParametersRelayCreateQueryVariables = {};
export type ParametersRelayCreateQueryResponse = {
    readonly allSystemParams: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly metalParams: {
                    readonly fiyat: number | null;
                    readonly sarfKatsayisi: number | null;
                    readonly fireKatsayisi: number | null;
                    readonly paslanmazKatsayisi: number | null;
                    readonly bukumFiyat: number | null;
                    readonly statikBoyaKatsayisi: number | null;
                    readonly eskitmeParlakPrincKatsayisi: number | null;
                } | null;
                readonly woodParams: {
                    readonly mdfFiyat: number | null;
                    readonly mdfFireKatsayisi: number | null;
                    readonly mdfLamFiyat: number | null;
                    readonly ahsapKaplamaFiyat: number | null;
                    readonly ahsapKaplamaFireKatsayisi: number | null;
                    readonly ahsapAstarKaplamaFireKatsayisi: number | null;
                    readonly ahsapAstarKaplamaFiyat: number | null;
                    readonly astarBasimFiyati: number | null;
                    readonly papelFiyat: number | null;
                    readonly laminantFiyat: number | null;
                    readonly cumbaFiyat: number | null;
                    readonly cumbaFireKatsayisi: number | null;
                    readonly cumbaIscilik: number | null;
                    readonly balonFiyat: number | null;
                    readonly tornaFiyatKatsayisi: number | null;
                    readonly keresteFiyat: number | null;
                    readonly keresteFireKatsayisi: number | null;
                    readonly masifPanelFiyati: number | null;
                    readonly digerKeresteFiyati: number | null;
                    readonly kontraplakFiyati: number | null;
                    readonly keresteKaplamaCilaFiyat: number | null;
                    readonly lakeBoyaFiyat: number | null;
                } | null;
                readonly laborParams: {
                    readonly metal: number | null;
                    readonly tasima: number | null;
                    readonly toplama: number | null;
                    readonly ahsap: number | null;
                    readonly polisaj: number | null;
                    readonly dosemeIscilikKatsayisi: number | null;
                    readonly akrilik: number | null;
                    readonly ambalaj: number | null;
                    readonly mermer: number | null;
                } | null;
                readonly otherWorkshopParams: {
                    readonly mermerFiyat: number | null;
                    readonly ozelMermerKatsayisi: number | null;
                    readonly kumasFiyat: number | null;
                    readonly camFiyat: number | null;
                    readonly mm4Katsayisi: number | null;
                    readonly mm10Katsayisi: number | null;
                    readonly aynaKatsayisi: number | null;
                } | null;
                readonly otherParams: {
                    readonly kdv1: number | null;
                    readonly kdv2: number | null;
                    readonly kdv3: number | null;
                    readonly silikon: number | null;
                    readonly aksesuarFiyatKatsayisi: number | null;
                    readonly akrilik: number | null;
                    readonly ambalajMalzeme: number | null;
                    readonly aliminyumDokumFiyatKatsayisi: number | null;
                    readonly sivamaFiyatKatsayisi: number | null;
                    readonly nakliyeFiyat: number | null;
                    readonly fahisKatsayisi: number | null;
                    readonly genelGiderler: number | null;
                    readonly reklamGiderler: number | null;
                    readonly barem1: number | null;
                    readonly barem2: number | null;
                    readonly barem3: number | null;
                    readonly evkaBaremMultiplier: number | null;
                    readonly tepeBaremMultiplier: number | null;
                    readonly hepsiBaremMultiplier: number | null;
                    readonly trendBaremMultiplier: number | null;
                    readonly amazonBaremMultiplier: number | null;
                    readonly vivenseBaremMultiplier: number | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type ParametersRelayCreateQuery = {
    readonly response: ParametersRelayCreateQueryResponse;
    readonly variables: ParametersRelayCreateQueryVariables;
};



/*
query ParametersRelayCreateQuery {
  allSystemParams {
    edges {
      node {
        id
        metalParams {
          fiyat
          sarfKatsayisi
          fireKatsayisi
          paslanmazKatsayisi
          bukumFiyat
          statikBoyaKatsayisi
          eskitmeParlakPrincKatsayisi
        }
        woodParams {
          mdfFiyat
          mdfFireKatsayisi
          mdfLamFiyat
          ahsapKaplamaFiyat
          ahsapKaplamaFireKatsayisi
          ahsapAstarKaplamaFireKatsayisi
          ahsapAstarKaplamaFiyat
          astarBasimFiyati
          papelFiyat
          laminantFiyat
          cumbaFiyat
          cumbaFireKatsayisi
          cumbaIscilik
          balonFiyat
          tornaFiyatKatsayisi
          keresteFiyat
          keresteFireKatsayisi
          masifPanelFiyati
          digerKeresteFiyati
          kontraplakFiyati
          keresteKaplamaCilaFiyat
          lakeBoyaFiyat
        }
        laborParams {
          metal
          tasima
          toplama
          ahsap
          polisaj
          dosemeIscilikKatsayisi
          akrilik
          ambalaj
          mermer
        }
        otherWorkshopParams {
          mermerFiyat
          ozelMermerKatsayisi
          kumasFiyat
          camFiyat
          mm4Katsayisi
          mm10Katsayisi
          aynaKatsayisi
        }
        otherParams {
          kdv1
          kdv2
          kdv3
          silikon
          aksesuarFiyatKatsayisi
          akrilik
          ambalajMalzeme
          aliminyumDokumFiyatKatsayisi
          sivamaFiyatKatsayisi
          nakliyeFiyat
          fahisKatsayisi
          genelGiderler
          reklamGiderler
          barem1
          barem2
          barem3
          evkaBaremMultiplier
          tepeBaremMultiplier
          hepsiBaremMultiplier
          trendBaremMultiplier
          amazonBaremMultiplier
          vivenseBaremMultiplier
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "akrilik",
  "storageKey": null
},
v1 = [
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
                "concreteType": "MetalParamsFieldNode",
                "kind": "LinkedField",
                "name": "metalParams",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sarfKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paslanmazKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bukumFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "statikBoyaKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eskitmeParlakPrincKatsayisi",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "WoodParamsFieldNode",
                "kind": "LinkedField",
                "name": "woodParams",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mdfFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mdfFireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mdfLamFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ahsapKaplamaFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ahsapKaplamaFireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ahsapAstarKaplamaFireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ahsapAstarKaplamaFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "astarBasimFiyati",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "papelFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "laminantFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cumbaFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cumbaFireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cumbaIscilik",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "balonFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "tornaFiyatKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "keresteFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "keresteFireKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "masifPanelFiyati",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "digerKeresteFiyati",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kontraplakFiyati",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "keresteKaplamaCilaFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lakeBoyaFiyat",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "LaborParamsFieldNode",
                "kind": "LinkedField",
                "name": "laborParams",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "metal",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "tasima",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "toplama",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ahsap",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "polisaj",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dosemeIscilikKatsayisi",
                    "storageKey": null
                  },
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ambalaj",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mermer",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OtherWorkshopParamsFieldNode",
                "kind": "LinkedField",
                "name": "otherWorkshopParams",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mermerFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ozelMermerKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kumasFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "camFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mm4Katsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mm10Katsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "aynaKatsayisi",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "silikon",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "aksesuarFiyatKatsayisi",
                    "storageKey": null
                  },
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ambalajMalzeme",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "aliminyumDokumFiyatKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sivamaFiyatKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nakliyeFiyat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fahisKatsayisi",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "genelGiderler",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "reklamGiderler",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "barem1",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "barem2",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "barem3",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "evkaBaremMultiplier",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "tepeBaremMultiplier",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hepsiBaremMultiplier",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "trendBaremMultiplier",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "amazonBaremMultiplier",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "vivenseBaremMultiplier",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ParametersRelayCreateQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ParametersRelayCreateQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ParametersRelayCreateQuery",
    "operationKind": "query",
    "text": "query ParametersRelayCreateQuery {\n  allSystemParams {\n    edges {\n      node {\n        id\n        metalParams {\n          fiyat\n          sarfKatsayisi\n          fireKatsayisi\n          paslanmazKatsayisi\n          bukumFiyat\n          statikBoyaKatsayisi\n          eskitmeParlakPrincKatsayisi\n        }\n        woodParams {\n          mdfFiyat\n          mdfFireKatsayisi\n          mdfLamFiyat\n          ahsapKaplamaFiyat\n          ahsapKaplamaFireKatsayisi\n          ahsapAstarKaplamaFireKatsayisi\n          ahsapAstarKaplamaFiyat\n          astarBasimFiyati\n          papelFiyat\n          laminantFiyat\n          cumbaFiyat\n          cumbaFireKatsayisi\n          cumbaIscilik\n          balonFiyat\n          tornaFiyatKatsayisi\n          keresteFiyat\n          keresteFireKatsayisi\n          masifPanelFiyati\n          digerKeresteFiyati\n          kontraplakFiyati\n          keresteKaplamaCilaFiyat\n          lakeBoyaFiyat\n        }\n        laborParams {\n          metal\n          tasima\n          toplama\n          ahsap\n          polisaj\n          dosemeIscilikKatsayisi\n          akrilik\n          ambalaj\n          mermer\n        }\n        otherWorkshopParams {\n          mermerFiyat\n          ozelMermerKatsayisi\n          kumasFiyat\n          camFiyat\n          mm4Katsayisi\n          mm10Katsayisi\n          aynaKatsayisi\n        }\n        otherParams {\n          kdv1\n          kdv2\n          kdv3\n          silikon\n          aksesuarFiyatKatsayisi\n          akrilik\n          ambalajMalzeme\n          aliminyumDokumFiyatKatsayisi\n          sivamaFiyatKatsayisi\n          nakliyeFiyat\n          fahisKatsayisi\n          genelGiderler\n          reklamGiderler\n          barem1\n          barem2\n          barem3\n          evkaBaremMultiplier\n          tepeBaremMultiplier\n          hepsiBaremMultiplier\n          trendBaremMultiplier\n          amazonBaremMultiplier\n          vivenseBaremMultiplier\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '19231cbf81d1133fb0ee09c3768a415d';
export default node;
